# Adding and reviewing HOPE resources

Edit [js/resources.js](js/resources.js), not the large application script.
It is a regular JavaScript data file loaded before the app. No account,
database write, administrator screen or package installation is needed.

## Add or edit a resource

1. Select the grade group: `elementary`, `middle` or `high`. A resource intended
   for two groups needs an entry in each; review its suitability for each age.
2. Find the existing medium/category, such as Books, TV Shows, Websites,
   Documentaries & Film, Academic & Research, or Worksheets. Keep current
   headings until the author approves a replacement.
3. Copy an item in that category's `items` array. Use the same single-quoted
   style and escape apostrophes as `\'`. Keep a comma between entries.
4. Fill in the fields below, verify the destination and preserve attribution.
   Link to an authorized publisher/creator page when possible. Do not copy
   artwork, book covers, films or other licensed media into the repository.
5. Run the checks below. Preview every changed grade, open the relevant
   category and test the card by keyboard and mouse.
6. Submit the proposed change for Colleen/content-owner review before anyone
   commits, pushes or publishes it. A status field is documentation, not an
   authorization or publication gate.

## Fields

| Field | Use |
|---|---|
| Grade container | `elementary`, `middle`, or `high`; controls where the item appears |
| Category `title`, `icon` | Existing category heading and icon identify the medium |
| `title` | Required resource title, preserving the creator's title |
| `desc` | Required short original description; include creator/source attribution when appropriate |
| `meta` | Optional visible type/platform, for example `Picture Book`, `Documentary`, or `Academic Paper` |
| `url` | Public HTTPS destination for an external resource; no student details, tracking codes or credentials |
| `action` | Existing in-app worksheet screen ID, instead of an external URL |
| `attribution` | Optional reviewer-readable creator/publisher/license reference; not rendered automatically |
| `reviewStatus` | Optional reviewer-readable `pending`, `approved`, or `needs-review`; not rendered or enforced |

Use **either** `url` **or** `action`, not both. Existing internal worksheet
IDs are `worksheet-search-screen`, `worksheet-literature-screen`,
`worksheet-teacher-screen`, and `worksheet-conversations-screen`.

Example shape (replace every placeholder; do not publish this sample):

```js
{
    title: 'Resource title',
    desc: 'A short description, including the author or organization.',
    meta: 'Documentary',
    url: 'https://example.org/resource',
    attribution: 'Creator; publisher; rights/link checked by reviewer',
    reviewStatus: 'pending'
}
```

Legacy entries were extracted without changing their titles, descriptions,
URLs, categories, attribution or order. Missing `reviewStatus` means
**unverified legacy entry**, not approved. Adding metadata does not retroactively
verify a resource or grant reuse rights. No public editing interface exists.

## Checks

From the project directory:

```powershell
node --check js\resources.js
node --check js\app.js
node --test
```

The tests are offline. They validate data shape, worksheet destinations,
loading order and grade/category rendering; they do not prove external links
are current. Check changed external links separately and record the date,
redirects, age suitability, source/creator and any access restrictions in the
review. A successful response is not a content or licensing approval.

## Proposed organization, awaiting approval

Retain grade as the primary grouping. Possible common medium groups are Books;
TV & Film; Art & Visual Media; Interactive Websites & Games; Classroom
Activities; and Research. No artworks or new media embeds have been added.

"Research" fits scholarly papers and primary reports better than a blanket
replacement for elementary "Fun Stuff" or the entire resource collection.
Potential rename targets are high school's **Academic & Research** category or
**Further Reading & Research** screen heading; the owner must identify and
approve the intended target. Current headings and filtering remain unchanged.
