// ============================================
// LASER TOOLS — Shared Material Database
// ============================================
// This data file is shared across all tools.
// Add new materials here; all tools benefit.

const MATERIALS = {

  // ---- ACRYLIC ----
  "cast-acrylic-black": {
    id: "cast-acrylic-black",
    name: "Cast Acrylic — Black Opaque",
    category: "acrylic",
    aliases: ["black acrylic", "opaque black acrylic"],
    diode: {
      cut:     { rating: "possible", label: "Possible — test first" },
      engrave: { rating: "good",     label: "Good candidate" },
      notes: "Black opaque cast acrylic absorbs diode laser energy better than clear or white. Cutting is possible but depends on thickness and exact formulation. Engraving generally works well. Always test your specific sheet.",
      colorFactor: "high-absorb"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["Acrylic fumes — use ventilation", "Fire risk at high power"],
      saferAlternatives: [],
      disclaimer: "Acrylic produces fumes when cut. Ensure adequate ventilation or fume extraction. Never leave the machine unattended."
    },
    betterLaserTypes: [],
    tags: ["acrylic", "opaque", "black"]
  },

  "cast-acrylic-clear": {
    id: "cast-acrylic-clear",
    name: "Cast Acrylic — Clear / Transparent",
    category: "acrylic",
    aliases: ["clear acrylic", "transparent acrylic", "perspex clear"],
    diode: {
      cut:     { rating: "not-recommended", label: "Not recommended for diode" },
      engrave: { rating: "difficult",       label: "Difficult for diode" },
      notes: "A blue diode laser beam often passes through clear acrylic rather than being absorbed. CO2 is strongly recommended for clear acrylic cutting. Engraving may produce very faint results unless the surface is masked or coated first.",
      colorFactor: "low-absorb"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["Acrylic fumes — use ventilation", "Fire risk at high power"],
      saferAlternatives: ["Cast acrylic — black opaque"],
      disclaimer: "Acrylic produces fumes when cut. Ensure adequate ventilation or fume extraction."
    },
    betterLaserTypes: ["CO2"],
    tags: ["acrylic", "clear", "transparent"]
  },

  "cast-acrylic-white": {
    id: "cast-acrylic-white",
    name: "Cast Acrylic — White Opaque",
    category: "acrylic",
    aliases: ["white acrylic", "opaque white acrylic"],
    diode: {
      cut:     { rating: "difficult", label: "Difficult for diode" },
      engrave: { rating: "difficult", label: "Difficult for diode" },
      notes: "White acrylic may reflect or scatter much of the diode laser energy. Results are often inconsistent. Some users have success with multiple slow passes at high power, but this increases charring risk. Test before committing to a project.",
      colorFactor: "reflective"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["Acrylic fumes — use ventilation"],
      saferAlternatives: ["Cast acrylic — black opaque"],
      disclaimer: "Acrylic produces fumes when cut. Ensure adequate ventilation."
    },
    betterLaserTypes: ["CO2"],
    tags: ["acrylic", "white", "opaque"]
  },

  "cast-acrylic-dark-opaque": {
    id: "cast-acrylic-dark-opaque",
    name: "Cast Acrylic — Dark Opaque Colors",
    category: "acrylic",
    aliases: ["dark acrylic", "colored opaque acrylic", "navy acrylic", "forest green acrylic"],
    diode: {
      cut:     { rating: "possible", label: "Possible — test first" },
      engrave: { rating: "good",     label: "Good candidate" },
      notes: "Darker opaque colors (navy, forest green, dark red, dark purple) absorb diode energy better than light or clear shades. Results vary by exact color and formulation. Run a test grid before a real project.",
      colorFactor: "moderate-absorb"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["Acrylic fumes — use ventilation"],
      saferAlternatives: [],
      disclaimer: "Acrylic produces fumes when cut. Ensure adequate ventilation."
    },
    betterLaserTypes: [],
    tags: ["acrylic", "opaque", "dark", "colored"]
  },

  "cast-acrylic-transparent-colored": {
    id: "cast-acrylic-transparent-colored",
    name: "Cast Acrylic — Transparent Colored",
    category: "acrylic",
    aliases: ["colored transparent acrylic", "tinted acrylic", "transparent red acrylic", "transparent blue acrylic"],
    diode: {
      cut:     { rating: "difficult",       label: "Difficult for diode" },
      engrave: { rating: "not-recommended", label: "Not recommended for diode" },
      notes: "Transparent colored acrylic may still transmit too much diode laser energy, depending on color depth and formulation. Darker transparent colors perform better than lighter ones, but results are inconsistent. CO2 is the better choice.",
      colorFactor: "partial-absorb"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["Acrylic fumes — use ventilation"],
      saferAlternatives: ["Cast acrylic — dark opaque colors"],
      disclaimer: "Acrylic produces fumes when cut. Ensure adequate ventilation."
    },
    betterLaserTypes: ["CO2"],
    tags: ["acrylic", "transparent", "colored"]
  },

  "mirror-acrylic": {
    id: "mirror-acrylic",
    name: "Mirror Acrylic",
    category: "acrylic",
    aliases: ["mirrored acrylic", "silver mirror acrylic", "gold mirror acrylic"],
    diode: {
      cut:     { rating: "caution", label: "Caution — verify backing" },
      engrave: { rating: "caution", label: "Caution — verify backing" },
      notes: "Mirror acrylic has a metallic backing that reflects the laser beam and can vary in composition. The backing and coating materials affect both performance and fume safety. Check the supplier data sheet. Test on a small piece away from your eyes and face first.",
      colorFactor: "reflective-coating"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["Unknown backing composition", "Possible metallic fumes", "Beam reflection risk"],
      saferAlternatives: [],
      disclaimer: "Reflective surfaces can redirect laser beams. Never look at or near a reflective surface during laser operation. Verify backing material composition with your supplier."
    },
    betterLaserTypes: [],
    tags: ["acrylic", "mirror", "reflective"]
  },

  "glitter-acrylic": {
    id: "glitter-acrylic",
    name: "Glitter Acrylic",
    category: "acrylic",
    aliases: ["glitter perspex", "sparkle acrylic"],
    diode: {
      cut:     { rating: "caution", label: "Caution — test carefully" },
      engrave: { rating: "caution", label: "Caution — test carefully" },
      notes: "Glitter fillers and unknown additives can affect cutting quality, produce unexpected fumes, and cause rough edges. The glitter particles may be metallic or plastic, and their composition is rarely documented. Test cautiously with good ventilation.",
      colorFactor: "unknown-filler"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["Unknown glitter filler composition", "Possible metallic particulates", "Rough edges and debris"],
      saferAlternatives: [],
      disclaimer: "Verify glitter filler composition with your supplier before lasering."
    },
    betterLaserTypes: [],
    tags: ["acrylic", "glitter", "specialty"]
  },

  "unknown-plastic": {
    id: "unknown-plastic",
    name: "Unknown Plastic / Acrylic",
    category: "acrylic",
    aliases: ["mystery plastic", "unlabeled plastic", "scrap plastic"],
    diode: {
      cut:     { rating: "unsafe", label: "Do not laser — verify first" },
      engrave: { rating: "unsafe", label: "Do not laser — verify first" },
      notes: "Do not assume an unknown plastic is safe to laser. Many plastics — including PVC, ABS, polycarbonate, and foam-core boards — release toxic or corrosive fumes when cut. Verify the material and check safety data before lasering.",
      colorFactor: "unknown"
    },
    safety: {
      status: "do-not-laser",
      label: "Unknown / do not assume safe",
      hazards: ["Possible chlorine gas (PVC)", "Possible toxic fumes (ABS)", "Unknown fire risk"],
      saferAlternatives: ["Cast acrylic from a named supplier"],
      disclaimer: "NEVER laser an unknown plastic. Identify the material completely before use."
    },
    betterLaserTypes: [],
    tags: ["acrylic", "unknown", "plastic", "unsafe"]
  },

  // ---- WOOD ----
  "basswood": {
    id: "basswood",
    name: "Basswood",
    category: "wood",
    aliases: ["bass wood", "linden wood"],
    diode: {
      cut:     { rating: "good",    label: "Good candidate" },
      engrave: { rating: "good",    label: "Good candidate" },
      notes: "Basswood is one of the most diode-laser-friendly woods. It is light, consistent in density, and cuts cleanly with good air assist. Excellent for ornaments, signs, and craft items.",
      colorFactor: "high-absorb"
    },
    safety: {
      status: "generally-laserable",
      label: "Generally laserable with precautions",
      hazards: ["Wood smoke — use ventilation", "Fire risk — monitor closely"],
      saferAlternatives: [],
      disclaimer: "All wood cutting produces smoke. Use ventilation and never leave the machine unattended."
    },
    betterLaserTypes: [],
    tags: ["wood", "basswood", "craft"]
  },

  "plywood": {
    id: "plywood",
    name: "Plywood (craft/birch)",
    category: "wood",
    aliases: ["birch plywood", "craft plywood", "laser ply"],
    diode: {
      cut:     { rating: "possible", label: "Possible — depends on grade" },
      engrave: { rating: "good",     label: "Good candidate" },
      notes: "Laser-grade birch plywood cuts reasonably well on higher-power diodes (10W+). Standard construction plywood contains voids and glue layers that can cause inconsistent cuts and produce additional fumes from adhesives. Use laser-grade ply when possible.",
      colorFactor: "moderate-absorb"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["Glue fumes from adhesive layers", "Wood smoke", "Fire risk"],
      saferAlternatives: ["Basswood", "Laser-grade birch ply"],
      disclaimer: "Plywood adhesive fumes can be harmful. Use proper ventilation and avoid plywood with unknown glue types."
    },
    betterLaserTypes: [],
    tags: ["wood", "plywood", "birch"]
  },

  "mdf": {
    id: "mdf",
    name: "MDF (Medium Density Fiberboard)",
    category: "wood",
    aliases: ["medium density fiberboard", "fibreboard"],
    diode: {
      cut:     { rating: "possible", label: "Possible — good ventilation required" },
      engrave: { rating: "good",     label: "Good candidate" },
      notes: "MDF engraves very consistently due to its uniform density. Cutting is possible on higher-wattage diodes but MDF contains formaldehyde-based binders that produce significant fumes. Strong ventilation or fume extraction is essential.",
      colorFactor: "high-absorb"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["Formaldehyde from binders", "Fine particulate dust", "Fire risk"],
      saferAlternatives: ["Basswood", "Low-formaldehyde MDF if available"],
      disclaimer: "MDF cutting produces formaldehyde-containing fumes. Use a fume extractor with carbon filtration and ensure strong ventilation."
    },
    betterLaserTypes: [],
    tags: ["wood", "mdf", "fiberboard"]
  },

  // ---- LEATHER ----
  "veg-tan-leather": {
    id: "veg-tan-leather",
    name: "Vegetable-Tanned Leather",
    category: "leather",
    aliases: ["veg tan leather", "natural leather", "tooling leather"],
    diode: {
      cut:     { rating: "good", label: "Good candidate" },
      engrave: { rating: "good", label: "Good candidate" },
      notes: "Vegetable-tanned leather is the preferred type for laser cutting. It cuts cleanly and engraves with excellent contrast. Results vary by thickness and tannin content.",
      colorFactor: "high-absorb"
    },
    safety: {
      status: "generally-laserable",
      label: "Generally laserable with precautions",
      hazards: ["Leather smoke — use ventilation"],
      saferAlternatives: [],
      disclaimer: "Leather produces smoke when cut. Use ventilation."
    },
    betterLaserTypes: [],
    tags: ["leather", "natural", "craft"]
  },

  "chrome-tanned-leather": {
    id: "chrome-tanned-leather",
    name: "Chrome-Tanned Leather",
    category: "leather",
    aliases: ["chrome tan", "garment leather"],
    diode: {
      cut:     { rating: "caution", label: "Caution — check tanning method" },
      engrave: { rating: "caution", label: "Caution — check tanning method" },
      notes: "Chrome-tanned leather may release hexavalent chromium compounds when lasered, which are toxic. Avoid unless you can confirm the tanning process and have proper extraction. Opt for vegetable-tanned leather when possible.",
      colorFactor: "moderate-absorb"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["Possible chromium fumes (toxic)", "Leather smoke"],
      saferAlternatives: ["Vegetable-tanned leather"],
      disclaimer: "Chrome-tanned leather may release hazardous fumes. Verify with supplier and use fume extraction."
    },
    betterLaserTypes: [],
    tags: ["leather", "chrome", "caution"]
  },

  "faux-leather": {
    id: "faux-leather",
    name: "Faux Leather / PU Leather",
    category: "leather",
    aliases: ["vegan leather", "PU leather", "synthetic leather", "pleather"],
    diode: {
      cut:     { rating: "caution", label: "Caution — verify composition" },
      engrave: { rating: "caution", label: "Caution — verify composition" },
      notes: "Faux leather is a broad category. PU (polyurethane) faux leather is generally considered safer to laser than PVC-based faux leather. PVC releases chlorine-containing toxic gases. Always confirm the material is PU and not PVC before lasering.",
      colorFactor: "variable"
    },
    safety: {
      status: "caution",
      label: "Use caution / verify composition",
      hazards: ["PVC-based faux leather releases chlorine gas (toxic)", "Unknown coatings and backing materials"],
      saferAlternatives: ["Vegetable-tanned leather", "Confirmed PU faux leather"],
      disclaimer: "Do not laser PVC-based faux leather. Confirm the material is PU, not PVC, before use."
    },
    betterLaserTypes: [],
    tags: ["leather", "faux", "synthetic", "caution"]
  },

  // ---- UNSAFE MATERIALS ----
  "pvc-vinyl": {
    id: "pvc-vinyl",
    name: "PVC / Vinyl",
    category: "unsafe",
    aliases: ["vinyl", "pvc", "polyvinyl chloride", "htv", "heat transfer vinyl", "sign vinyl"],
    diode: {
      cut:     { rating: "unsafe", label: "Do NOT laser" },
      engrave: { rating: "unsafe", label: "Do NOT laser" },
      notes: "PVC and vinyl release hydrochloric acid gas when lasered — a toxic and corrosive fume that is dangerous to inhale and will damage your laser's optics and electronics. This is one of the most important materials to avoid.",
      colorFactor: "dangerous"
    },
    safety: {
      status: "do-not-laser",
      label: "Do not laser",
      hazards: ["Hydrochloric acid gas (toxic, corrosive)", "Damages laser optics and electronics", "Serious health risk"],
      saferAlternatives: ["Paper vinyl alternatives for engraving", "Acrylic for signs"],
      disclaimer: "NEVER laser PVC or vinyl. The fumes are toxic and will corrode your machine."
    },
    betterLaserTypes: [],
    tags: ["pvc", "vinyl", "unsafe", "do-not-laser"]
  },

  "abs-plastic": {
    id: "abs-plastic",
    name: "ABS Plastic",
    category: "unsafe",
    aliases: ["abs", "acrylonitrile butadiene styrene"],
    diode: {
      cut:     { rating: "unsafe", label: "Do NOT laser" },
      engrave: { rating: "unsafe", label: "Do NOT laser" },
      notes: "ABS melts rather than cuts cleanly and releases cyanide-containing fumes when burned. It also tends to warp and produce rough, fire-prone results. Avoid entirely.",
      colorFactor: "dangerous"
    },
    safety: {
      status: "do-not-laser",
      label: "Do not laser",
      hazards: ["Cyanide-containing fumes (toxic)", "Melts badly — fire risk", "Corrosive to machine internals"],
      saferAlternatives: ["Cast acrylic for similar appearance"],
      disclaimer: "NEVER laser ABS. Fumes are toxic. Use cast acrylic instead."
    },
    betterLaserTypes: [],
    tags: ["abs", "plastic", "unsafe", "do-not-laser"]
  },

  // ---- COATED METALS ----
  "anodized-aluminum": {
    id: "anodized-aluminum",
    name: "Anodized Aluminum",
    category: "metal",
    aliases: ["anodised aluminum", "anodized aluminium"],
    diode: {
      cut:     { rating: "not-recommended", label: "Not for cutting" },
      engrave: { rating: "good",            label: "Good candidate for marking" },
      notes: "Anodized aluminum cannot be cut by diode lasers but marks and engraves very well. The laser removes the colored anodized layer to reveal the silver aluminum beneath, creating high-contrast permanent marks. Excellent for name tags, badges, and personalized items.",
      colorFactor: "surface-coating"
    },
    safety: {
      status: "generally-laserable",
      label: "Generally laserable with precautions",
      hazards: ["Aluminum oxide dust — use ventilation"],
      saferAlternatives: [],
      disclaimer: "Use ventilation when engraving metal. Do not breathe metal dust or fumes."
    },
    betterLaserTypes: ["Fiber (for deep engraving)"],
    tags: ["metal", "aluminum", "anodized", "marking"]
  },

  // ---- PAPER / CARDBOARD ----
  "cardstock-paper": {
    id: "cardstock-paper",
    name: "Cardstock / Paper",
    category: "paper",
    aliases: ["cardstock", "paper", "kraft paper", "construction paper"],
    diode: {
      cut:     { rating: "good", label: "Good candidate" },
      engrave: { rating: "good", label: "Good candidate" },
      notes: "Paper and cardstock cut easily on even low-powered diodes. Watch for fire risk — paper ignites easily. Use good air assist to blow away sparks and monitor the cut closely. Avoid coated or glossy papers with unknown coatings.",
      colorFactor: "high-absorb"
    },
    safety: {
      status: "generally-laserable",
      label: "Generally laserable with precautions",
      hazards: ["High fire risk", "Paper smoke and particulates"],
      saferAlternatives: [],
      disclaimer: "Paper is a fire risk. Never leave the machine unattended. Use air assist."
    },
    betterLaserTypes: [],
    tags: ["paper", "cardstock", "craft"]
  }
};

// Rating display config
const RATING_CONFIG = {
  "good":             { label: "Good candidate",          cssClass: "badge-good",             icon: "✓" },
  "possible":         { label: "Possible — test first",   cssClass: "badge-possible",          icon: "◑" },
  "difficult":        { label: "Difficult for diode",     cssClass: "badge-difficult",         icon: "△" },
  "caution":          { label: "Caution — verify first",  cssClass: "badge-caution",           icon: "⚠" },
  "not-recommended":  { label: "Not recommended",         cssClass: "badge-not-recommended",   icon: "✕" },
  "unsafe":           { label: "Do not laser / safety risk", cssClass: "badge-unsafe",         icon: "✕" }
};
