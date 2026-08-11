import logoAsset from "@/assets/logo.jpg.asset.json";
import ownerAsset from "@/assets/owner.jpg.asset.json";
import shopAsset from "@/assets/shopfront.jpg.asset.json";
import tharAsset from "@/assets/thar-halo.png.asset.json";
import swiftAsset from "@/assets/swift-arrival.png.asset.json";
import steeringAsset from "@/assets/steering-wrap.png.asset.json";
import seatCoverAsset from "@/assets/seatcover-xuv.png.asset.json";
import installAsset from "@/assets/install-engine.png.asset.json";
import nightAsset from "@/assets/night-lighting.png.asset.json";

/**
 * Centralised image registry. Every entry below is a genuine Vakratund
 * photograph supplied by the business — no stock photography is used.
 */
export const IMAGES = {
  logo: logoAsset.url,
  owner: ownerAsset.url,
  shop: shopAsset.url,
  workshop: shopAsset.url,

  // Cars photographed at / by Vakratund
  heroCar: tharAsset.url,
  arrivalCar: swiftAsset.url,
  finalCar: tharAsset.url,

  // Work categories
  seatCovers: seatCoverAsset.url,
  steering: steeringAsset.url,
  floorMats: seatCoverAsset.url,
  androidScreens: installAsset.url,
  audio: installAsset.url,
  wiring: installAsset.url,
  lighting: nightAsset.url,
  wheels: tharAsset.url,
  styling: nightAsset.url,

  gallery: [
    { src: tharAsset.url, label: "Thar · halo headlamp build" },
    { src: seatCoverAsset.url, label: "Mahindra XUV300 · seat cover fitting" },
    { src: installAsset.url, label: "Front-end electrical install" },
    { src: nightAsset.url, label: "Exteriors after dark" },
    { src: steeringAsset.url, label: "Steering wrap · stitched finish" },
    { src: swiftAsset.url, label: "Swift in the bay" },
    { src: shopAsset.url, label: "The Somatane shopfront" },
  ],

  instagram: [
    { src: tharAsset.url, type: "reel" as const },
    { src: seatCoverAsset.url, type: "reel" as const },
    { src: installAsset.url, type: "reel" as const },
    { src: steeringAsset.url, type: "reel" as const },
    { src: nightAsset.url, type: "photo" as const },
    { src: swiftAsset.url, type: "photo" as const },
  ],
} as const;