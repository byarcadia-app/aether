# Utilities

### Class Names

```tsx
import { cn, cnx } from "@byarcadia-app/aether";

// cn: fast join, no conflict resolution
cn("flex gap-4", isActive && "opacity-100");

// cnx: merge with Tailwind conflict resolution (preferred)
cnx("text-sm p-4", "text-lg p-8"); // -> "text-lg p-8"
```

### Color Utilities

```tsx
import { parseHsla, generateHsla, adjustLightness, hslaToRgba, withAlpha } from "@byarcadia-app/aether";

parseHsla("hsla(240, 4%, 97%, 1)");
// { hue: 240, saturation: 4, lightness: 97, alpha: 1 }

hslaToRgba("hsla(245, 70%, 58%, 1)");
// "rgba(98, 71, 198, 1)"

withAlpha("hsla(240, 4%, 97%, 1)", 0.5);
// "hsla(240, 4%, 97%, 0.5)"
```
