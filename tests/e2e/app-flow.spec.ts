import { expect, test } from "@playwright/test";

test("chapter navigation reaches a chapter landing page", async ({ page }) => {
  await page.goto("/chapters");

  await expect(
    page.getByRole("heading", { name: "Browse scaffolded learning tracks" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Chapter page" }).first().click();

  await expect(page).toHaveURL(/\/chapters\/.+/);
  await expect(page.getByText("Chapter Progress")).toBeVisible();
});

test("problem lessons render walkthrough and practice content", async ({
  page,
}) => {
  await page.goto("/learn/two-pointers/pair-sum-sorted");

  await expect(page.getByText("Algorithm walkthrough")).toBeVisible();
  await expect(page.getByText("Practice Task")).toBeVisible();
  await expect(page.getByRole("button", { name: "Run tests" })).toBeVisible();
});

test("lesson progress updates persist into the chapter page", async ({
  page,
}) => {
  await page.goto("/learn/two-pointers/intro");

  await page.getByRole("button", { name: "in progress" }).click();

  await expect(page.getByText("Current status: in progress")).toBeVisible();

  await page.goto("/chapters/two-pointers");

  await expect(page.getByText("Status: in progress").first()).toBeVisible();
});

test("mastery flow records a successful run and marks the lesson complete", async ({
  page,
}) => {
  await page.goto("/mastery/two-pointers");

  await page.locator("textarea.code-editor")
    .fill(`export function masteryMove(currentSum, target) {
  const tooSmallMove = "left";
  const tooLargeMove = "right";
  const equalMove = "found";

  if (currentSum < target) {
    return tooSmallMove;
  }

  if (currentSum > target) {
    return tooLargeMove;
  }

  return equalMove;
}
`);

  await page.getByRole("button", { name: "Run tests" }).click();

  await expect(
    page.getByText("Pass. You completed the mastery implementation task."),
  ).toBeVisible();

  await page.reload();

  await expect(page.getByText("Current status: completed")).toBeVisible();
});
