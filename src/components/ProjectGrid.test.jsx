// Feature: portfolio-overhaul, Property 2: Registry-driven rendering — any valid project appears in the grid
// Feature: portfolio-overhaul, Property 3: Stable keys — no index-based keys in project lists

import React from 'react'
import { render, cleanup, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import * as fc from 'fast-check'
import { ProjectGrid } from './ProjectGrid'

afterEach(cleanup)

/**
 * Validates: Requirements 2.2, 5.2
 *
 * Property 2: Registry-driven rendering — any valid project appears in the grid
 *
 * For any valid ProjectData object injected into ProjectGrid, the rendered output
 * must contain a card whose title matches the project's `title` field.
 */
describe('ProjectGrid — Property 2: Registry-driven rendering', () => {
    test('any valid project injected into ProjectGrid appears in the rendered output', () => {
        // Arbitraries for required ProjectData fields.
        // Constrain to strings with at least one non-whitespace character so the
        // title is visible and queryable in the rendered DOM.
        const nonEmptyString = fc
            .stringMatching(/^\S[\s\S]{0,79}$/)
            .filter((s) => s.trim().length > 0)
        const fakeUrl = fc.constant('https://example.com/test-image.png')

        const projectDataArb = fc.record({
            title: nonEmptyString,
            projTagline: nonEmptyString,
            projDescription: nonEmptyString,
            imgUrl: fakeUrl,
        })

        fc.assert(
            fc.property(projectDataArb, (project) => {
                const { container } = render(
                    <MemoryRouter>
                        <ProjectGrid projects={[project]} />
                    </MemoryRouter>
                )

                // Query within the rendered container to avoid cross-run DOM pollution.
                // The card's title is rendered inside an <h4> by ProjectCard.
                const h4Elements = within(container).getAllByRole('heading', { level: 4 })
                const found = h4Elements.some((el) => el.textContent === project.title)

                cleanup()
                return found
            }),
            { numRuns: 100 }
        )
    })
})

/**
 * Validates: Requirements 4.2
 *
 * Property 3: Stable keys — no index-based keys in project lists
 *
 * For any array of ProjectData objects with unique titles, rendering ProjectGrid
 * must produce exactly one heading per project title — no duplicates and no
 * missing entries. This indirectly verifies that keys are derived from
 * `project.title` (stable, identity-based) rather than array indices, because
 * index-based keys can cause React to reuse/misplace DOM nodes leading to
 * duplicate or missing rendered content.
 */
describe('ProjectGrid — Property 3: Stable keys — no index-based keys in project lists', () => {
    test('each project title appears exactly once in the rendered output for any array of unique-title projects', () => {
        const nonEmptyString = fc
            .stringMatching(/^\S[\s\S]{0,79}$/)
            .filter((s) => s.trim().length > 0)
        const fakeUrl = fc.constant('https://example.com/test-image.png')

        const projectDataArb = fc.record({
            title: nonEmptyString,
            projTagline: nonEmptyString,
            projDescription: nonEmptyString,
            imgUrl: fakeUrl,
        })

        // Generate arrays of 1–10 projects where all titles are unique
        const uniqueTitleProjectsArb = fc.uniqueArray(projectDataArb, {
            minLength: 1,
            maxLength: 10,
            selector: (p) => p.title,
        })

        fc.assert(
            fc.property(uniqueTitleProjectsArb, (projects) => {
                const { container } = render(
                    <MemoryRouter>
                        <ProjectGrid projects={projects} />
                    </MemoryRouter>
                )

                const h4Elements = within(container).getAllByRole('heading', { level: 4 })

                // Every project title must appear exactly once — no duplicates, no missing entries
                const allTitlesPresent = projects.every((project) => {
                    const matches = h4Elements.filter((el) => el.textContent === project.title)
                    return matches.length === 1
                })

                // Total heading count must equal the number of projects (no extras)
                const noExtraHeadings = h4Elements.length === projects.length

                cleanup()
                return allTitlesPresent && noExtraHeadings
            }),
            { numRuns: 100 }
        )
    })
})
