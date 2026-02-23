# Contributing

Contributions are always welcome, no matter how large or small!

## Before You Start

### Important Guidelines

@arcadia/aether follows a design system rooted in iOS Human Interface Guidelines. To ensure consistency and quality:

**Do NOT** without prior discussion:

- Add new variants to existing components
- Change component designs or visual appearance
- Modify existing component behavior or public API
- Add features outside the existing design direction

### How to Propose Changes

1. **GitHub Issues** — Bug reports and small improvements
2. **GitHub Discussions** — Feature proposals, API changes, new component ideas. Include use cases, examples, and rationale.

### What We're Looking For

The best contributions are:

- **Bug fixes** for existing issues
- **Documentation improvements**
- **Storybook stories** for uncovered components
- **Performance optimizations** (without changing behavior)
- **Accessibility improvements**
- **New components** that follow iOS HIG patterns (discuss first)

## Development Setup

This project uses [pnpm workspaces](https://pnpm.io/workspaces). It contains:

- The library package in the root directory
- An example Expo app in `example/`

### Prerequisites

- [Node.js](https://nodejs.org/) (check `.nvmrc` if present)
- [pnpm](https://pnpm.io/) v10+
- Xcode (for iOS simulator)

### Install Dependencies

```sh
pnpm install
```

> This project uses pnpm workspaces. Do not use `npm` or `yarn`.

### Running the Example App

The example app uses the local version of the library — any source changes are reflected immediately (JS-level). It includes [Storybook](https://storybook.js.org/) for component development.

Start the Metro bundler:

```sh
pnpm example:start
```

Run on iOS simulator:

```sh
pnpm example:ios
```

### Verification

Make sure your code passes type checking and linting before submitting:

```sh
pnpm check    # TypeScript (tsc --noEmit)
pnpm lint     # Lint with oxlint
pnpm fmt:check # Check formatting with oxfmt
```

To auto-fix formatting:

```sh
pnpm fmt
```

### Build

```sh
pnpm build    # Build with tsup (CJS + ESM + DTS)
pnpm dev      # Build in watch mode
```

### All Scripts

| Command             | Description                        |
| ------------------- | ---------------------------------- |
| `pnpm build`        | Build with tsup (CJS + ESM + DTS) |
| `pnpm dev`          | Build in watch mode                |
| `pnpm check`        | TypeScript type checking           |
| `pnpm lint`         | Lint with oxlint                   |
| `pnpm fmt`          | Format with oxfmt                  |
| `pnpm fmt:check`    | Check formatting                   |
| `pnpm example:start`| Start example Expo dev server      |
| `pnpm example:ios`  | Run example on iOS simulator       |

## Component Conventions

### File Organization

Each component gets its own directory under `src/ui/{category}/{component-name}/` with three files:

```
src/ui/{category}/{component-name}/
├── {component-name}.tsx   # Implementation
├── types.ts               # All type definitions
└── index.ts               # Barrel export
```

### Implementation Pattern

```tsx
import { tv } from "tailwind-variants";
import type { ComponentProps } from "./types";

export const componentVariants = tv({
  variants: {
    variant: { /* ... */ },
    color: { /* ... */ },
  },
  defaultVariants: { /* ... */ },
});

export function Component({ variant, color, children, ...props }: ComponentProps) {
  return (
    <BaseText
      {...props}
      className={componentVariants({ variant, color, className: props.className })}
    >
      {children}
    </BaseText>
  );
}

Component.displayName = "Aether.{Category}.{Name}";
```

### Rules

- Use `tailwind-variants` (`tv()`) for all styling — export variant constants as named exports
- Derive props from `VariantProps<typeof variants>` combined with base props in `types.ts`
- **No `forwardRef`** — React 19 handles refs as standard props
- Set `displayName` using the format `Aether.{Category}.{Name}`
- All text components compose through the internal `BaseText` primitive
- No inline `StyleSheet` objects — all styling uses Tailwind classes through NativeWind
- Use `cnx()` (Tailwind conflict resolution) for merging class names in component props

### Adding a New Component

1. Create directory: `src/ui/{category}/{component-name}/`
2. Create `types.ts` — all TypeScript interfaces with JSDoc + `@example` tags
3. Create `{component-name}.tsx` — implementation with `tv()` variants
4. Create `index.ts` — barrel export
5. Re-export through parent `index.ts` barrels up to `src/index.ts`
6. Add Storybook story in `example/src/stories/`
7. Create `{component-name}.md` in the component directory following `docs/_template.md`
8. Add entry to `docs/components.md` index table

### Adding a New Hook

1. Create `src/hooks/use-{name}.ts`
2. Add JSDoc with at least one `@example` tag
3. Export from `src/hooks/index.ts`
4. Update `docs/hooks.md`

### Documentation Sync

Every public API must have JSDoc with `@example`. When changing the codebase:

| Change             | Documentation Action                                                                          |
| ------------------ | --------------------------------------------------------------------------------------------- |
| New component      | Create per-component `.md` following `docs/_template.md`, add to `docs/components.md`, add Storybook story |
| New hook           | Update `docs/hooks.md`                                                                        |
| New utility        | Update `docs/utilities.md`                                                                    |
| New color tokens   | Update JSDoc in `colors.ts`, update `docs/colors.md`                                          |
| Changed public API | Update relevant per-component `.md` file                                                      |
| New provider prop  | Update `docs/provider.md`                                                                     |

### Theme Synchronization

Three files must stay in sync when modifying color tokens:

| File                     | Role                                          |
| ------------------------ | --------------------------------------------- |
| `src/theme/colors.ts`    | Raw HSLA values + NativeWind `vars()` objects |
| `src/tailwind/preset.ts` | Tailwind config (`var(--color-*)` references) |
| `src/theme/utils.ts`     | Variable generation for custom palettes       |

Always update both `lightColors` and `darkColors` together.

## Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/en) specification:

- `fix`: bug fixes, e.g. fix crash due to deprecated method
- `feat`: new features, e.g. add new component
- `refactor`: code refactor, e.g. migrate to new API pattern
- `docs`: documentation changes, e.g. add usage example
- `test`: adding or updating tests
- `chore`: tooling changes, e.g. update build config

Examples:

```
feat: add Checkbox component
fix: resolve Button shimmer flicker on dark mode
docs: add Card compound component examples
refactor: extract shared pressable animation hook
chore: update tsup to v9
```

## Changesets

We use [changesets](https://github.com/changesets/changesets) for versioning and changelogs. If your change affects the public API or fixes a bug, add a changeset:

```sh
pnpm changeset
```

This will prompt you to:

1. Select the package (`@arcadia/aether`)
2. Choose the semver bump type (`patch`, `minor`, `major`)
3. Write a summary of the change

The changeset file is committed with your PR and consumed during the release process.

**When to add a changeset:**

- Bug fix → `patch`
- New component or feature → `minor`
- Breaking API change → `major`
- Documentation-only changes → no changeset needed

## Sending a Pull Request

> **First time?** Learn how from this free series: [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github).

### Before Opening a PR

1. **Ensure alignment** — your PR should:
   - Fix an existing issue, OR
   - Implement a feature that was discussed and approved

2. **Do NOT open PRs for**:
   - New component variants not discussed beforehand
   - Visual/design changes without prior approval
   - Breaking API changes without discussion

### PR Checklist

- [ ] Code passes `pnpm check` (TypeScript)
- [ ] Code passes `pnpm lint` (oxlint)
- [ ] Code passes `pnpm fmt:check` (oxfmt)
- [ ] Build succeeds with `pnpm build`
- [ ] New/changed components have Storybook stories
- [ ] New public APIs have JSDoc with `@example` tags
- [ ] Documentation updated (per-component `.md` or `docs/`)
- [ ] Changeset added (if applicable)
- [ ] PR is focused on a single change
- [ ] Commit messages follow conventional commits

### PR Review Process

- Prefer small, focused pull requests
- Include context in the PR description — what changed and why
- Link related issues or discussions
- PRs that don't follow these guidelines may be closed without review

## Project Structure

For a full directory map and architecture overview, see the [AGENTS.md](./AGENTS.md) file.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
