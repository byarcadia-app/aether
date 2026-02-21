import { createContext, useContext } from "react";
import type { ListContextValue, ListItemContextValue } from "./types";

// ============================================================================
// List Context
// ============================================================================

/**
 * Context for List component - provides variant and surfaceLevel to children
 */
export const ListContext = createContext<ListContextValue | null>(null);

/**
 * Hook to access List context.
 * Must be used within a List component.
 *
 * @throws Error if used outside of List
 */
export function useListContext(): ListContextValue {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("List compound components must be used within <List>");
  }
  return context;
}

// ============================================================================
// ListItem Context
// ============================================================================

/**
 * Context for ListItem component - provides state to compound components
 */
export const ListItemContext = createContext<ListItemContextValue | null>(null);

/**
 * Hook to access ListItem context.
 * Must be used within a ListItem component.
 *
 * @throws Error if used outside of ListItem
 */
export function useListItemContext(): ListItemContextValue {
  const context = useContext(ListItemContext);
  if (!context) {
    throw new Error("ListItem compound components must be used within <ListItem>");
  }
  return context;
}
