import { USE_MOCK_API } from "@/config/business";
import type { Product } from "./products";

export type EnquiryPayload = {
  name: string;
  phone: string;
  carModel: string;
  productId?: string;
  productName?: string;
  message?: string;
};

export async function submitEnquiry(
  payload: EnquiryPayload,
): Promise<{ ok: true }> {
  if (USE_MOCK_API) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { ok: true };
  }

  const apiUrl = import.meta.env["VITE_API_URL"];

  if (!apiUrl) {
    throw new Error("ERP API URL is not configured");
  }

  const response = await fetch(`${apiUrl}/api/public/enquiries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    let message = "Could not submit enquiry";

    try {
      const data = await response.json();
      if (data?.error) message = data.error;
    } catch {
      // Keep default error message
    }

    throw new Error(message);
  }

  return { ok: true };
}

export type ProductOption = Pick<Product, "id" | "name" | "category">;

const localCatalogue: ProductOption[] = [
  { id: "p1", name: "Android Smart Screen", category: "Electronics" },
  { id: "p2", name: "Custom Leatherette Seat Covers", category: "Interiors" },
  { id: "p3", name: "Projector Headlamp Set", category: "Lighting" },
  { id: "p4", name: "Premium 3D Floor Mats", category: "Interiors" },
  { id: "p5", name: "Component Speaker Upgrade", category: "Audio" },
  { id: "p6", name: "Steering Wheel Wrap", category: "Styling" },
  { id: "p7", name: "Central Locking System", category: "Security" },
  { id: "p8", name: "Alloy Wheel Set", category: "Styling" },
];

export const POPULAR_CATEGORIES = [
  "Interiors",
  "Electronics",
  "Lighting",
  "Audio",
  "Styling",
  "Security",
];

/** Server-side filtered product search. Falls back to the local list in mock mode. */
export async function searchProducts(query: string): Promise<ProductOption[]> {
  if (USE_MOCK_API) {
    await new Promise((resolve) => setTimeout(resolve, 120));
    const q = query.trim().toLowerCase();
    if (!q) return localCatalogue.slice(0, 6);
    return localCatalogue.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q),
    );
  }
  const response = await fetch(
    `${import.meta.env['VITE_API_URL']}/api/public/products?search=${encodeURIComponent(query)}&limit=8`,
  );
  if (!response.ok) throw new Error("Could not search products");
  return response.json() as Promise<ProductOption[]>;
}