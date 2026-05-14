// Feature: portfolio-overhaul, Property 5: Image alt text — all informational images have non-empty alt attributes

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as fc from 'fast-check';
import { ProjectCard } from './ProjectCard';
import { ProjectBanner } from './ProjectBanner';

afterEach(cleanup);

/**
 * Validates: Requirements 4.4
 *
 * Property 5: Image alt text — all informational images have non-empty alt attributes
 *
 * For any ProjectData object rendered through ProjectCard or ProjectBanner, every
 * <img> element that displays project-specific content must have a non-empty alt attribute.
 */

const nonEmptyString = fc
  .stringMatching(/^\S[\s\S]{0,79}$/)
  .filter((s) => s.trim().length > 0);
const fakeUrl = fc.constant('https://example.com/test-image.png');

const projectDataArb = fc.record({
  title: nonEmptyString,
  projTagline: nonEmptyString,
  projDescription: nonEmptyString,
  imgUrl: fakeUrl,
});

describe('ProjectCard — Property 5: Image alt text', () => {
  test('all img elements have non-empty alt attributes for any valid project', () => {
    fc.assert(
      fc.property(projectDataArb, (project) => {
        const { container } = render(
          <MemoryRouter>
            <ProjectCard
              title={project.title}
              projTagline={project.projTagline}
              projDescription={project.projDescription}
              imgUrl={project.imgUrl}
            />
          </MemoryRouter>
        );

        const imgElements = container.querySelectorAll('img');
        const allHaveAlt = Array.from(imgElements).every(
          (img) => img.hasAttribute('alt') && img.getAttribute('alt') !== ''
        );

        cleanup();
        return allHaveAlt;
      }),
      { numRuns: 100 }
    );
  });
});

describe('ProjectBanner — Property 5: Image alt text', () => {
  test('all img elements have non-empty alt attributes for any valid project', () => {
    fc.assert(
      fc.property(projectDataArb, (project) => {
        const { container } = render(
          <ProjectBanner
            name={project.title}
            tagline={project.projTagline}
            description={project.projDescription}
            imageUrl={project.imgUrl}
            btLink={undefined}
          />
        );

        const imgElements = container.querySelectorAll('img');
        const allHaveAlt = Array.from(imgElements).every(
          (img) => img.hasAttribute('alt') && img.getAttribute('alt') !== ''
        );

        cleanup();
        return allHaveAlt;
      }),
      { numRuns: 100 }
    );
  });
});
