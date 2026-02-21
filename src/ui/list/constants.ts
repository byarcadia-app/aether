import type { ThemeColor } from "../../theme/colors";
import type { SurfaceLevel } from "../surface";

/**
 * Display names for debugging and component identification
 */
export const LIST_DISPLAY_NAMES = {
  LIST: "Aether.List.List",
  LIST_ITEM: "Aether.List.ListItem",
  LIST_ITEM_CONTENT: "Aether.List.ListItemContent",
  LIST_ITEM_ICON: "Aether.List.ListItemIcon",
  LIST_ITEM_CHEVRON: "Aether.List.ListItemChevron",
  LIST_ITEM_COLLAPSE: "Aether.List.ListItemCollapse",
  LIST_ITEM_ACCESSORY: "Aether.List.ListItemAccessory",
  LIST_SECTION_HEADER: "Aether.List.ListSectionHeader",
} as const;

/**
 * Highlight color by surface level for list items
 */
export const LIST_HIGHLIGHT_COLOR_MAP: Record<SurfaceLevel, ThemeColor> = {
  default: "foreground",
  secondary: "foreground",
  tertiary: "foreground",
  quaternary: "foreground",
  transparent: "foreground",
} as const;

/**
 * Animation timing constants
 */
export const LIST_ANIMATION = {
  /** Chevron rotation animation duration */
  chevronDuration: 150,
  /** Collapse height animation duration */
  collapseDuration: 250,
  /** Press highlight animation duration */
  pressDuration: 100,
  /** Default highlight opacity */
  highlightOpacity: 0.08,
} as const;

/**
 * Layout constants aligned with iOS HIG
 */
export const LIST_LAYOUT = {
  /** iOS minimum touch target (44pt) */
  itemMinHeight: 44,
  /** Horizontal padding (16pt = px-4) */
  itemPaddingX: 16,
  /** Vertical padding (12pt = py-3) */
  itemPaddingY: 12,
  /** Divider horizontal inset (16pt = mx-4) */
  dividerInset: 16,
  /** Gap between item children (12pt = gap-3) */
  itemGap: 12,
} as const;

/**
 * Default List props
 */
export const LIST_DEFAULTS = {
  variant: "default",
  surfaceLevel: "secondary",
  showDividers: true,
} as const;

/**
 * Default ListItem props
 */
export const LIST_ITEM_DEFAULTS = {
  isCollapsible: false,
  defaultExpanded: false,
  disabled: false,
} as const;
