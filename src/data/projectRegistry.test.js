// Feature: portfolio-overhaul, Property 1: All registry entries conform to the ProjectData shape

import * as fc from 'fast-check'
import { gameProjects, frontEndProjects } from './projectRegistry'

/**
 * Property 1: All registry entries conform to the ProjectData shape
 * Validates: Requirements 2.3
 *
 * This is a property over the actual set of registered projects (not randomly
 * generated data). We iterate every entry in the combined registry and assert
 * each required field is present and of the correct type.
 */
describe('projectRegistry — Property 1: All registry entries conform to the ProjectData shape', () => {
    const allProjects = [...gameProjects, ...frontEndProjects]

    it('should have at least one project registered', () => {
        expect(allProjects.length).toBeGreaterThan(0)
    })

    it('every entry has a non-empty string title', () => {
        fc.assert(
            fc.property(fc.constantFrom(...allProjects), (project) => {
                expect(typeof project.title).toBe('string')
                expect(project.title.length).toBeGreaterThan(0)
            })
        )
    })

    it('every entry has a non-empty string projTagline', () => {
        fc.assert(
            fc.property(fc.constantFrom(...allProjects), (project) => {
                expect(typeof project.projTagline).toBe('string')
                expect(project.projTagline.length).toBeGreaterThan(0)
            })
        )
    })

    it('every entry has a non-empty string projDescription', () => {
        fc.assert(
            fc.property(fc.constantFrom(...allProjects), (project) => {
                expect(typeof project.projDescription).toBe('string')
                expect(project.projDescription.length).toBeGreaterThan(0)
            })
        )
    })

    it('every entry has a truthy imgUrl', () => {
        fc.assert(
            fc.property(fc.constantFrom(...allProjects), (project) => {
                expect(project.imgUrl).toBeTruthy()
            })
        )
    })

    it('all required fields pass for every registered project (exhaustive check)', () => {
        allProjects.forEach((project) => {
            expect(typeof project.title).toBe('string')
            expect(project.title.length).toBeGreaterThan(0)

            expect(typeof project.projTagline).toBe('string')
            expect(project.projTagline.length).toBeGreaterThan(0)

            expect(typeof project.projDescription).toBe('string')
            expect(project.projDescription.length).toBeGreaterThan(0)

            expect(project.imgUrl).toBeTruthy()
        })
    })
})
