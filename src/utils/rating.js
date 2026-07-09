import { Rating } from "../components/common/Rating.js";

export function renderStars(rating, label = "Rating") {
  return Rating({ rating, label });
}
