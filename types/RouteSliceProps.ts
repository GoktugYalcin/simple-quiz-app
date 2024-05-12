export type RouteType = "intro" | "quiz" | "end" | null;

export type RouteProps = {
  type: RouteType;
  pageNumber?: number;
};
export interface RouteStateProps {
  currentRoute: RouteProps;
  loading: boolean;
}
