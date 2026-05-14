// Feature: portfolio-overhaul, Property 4: Explicit props round-trip — ProjectPage children render correctly for any project

import React from 'react';
import { render, cleanup, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as fc from 'fast-check';
import { ProjectBanner } from './ProjectBanner';
import { ProjectInfo } from './ProjectInfo';
import { ProjectImages } from './ProjectImages';

afterEach(cleanup);

/**
 * Validates: Requirements 4.7
 *
 * Property 4: Explicit props round-trip — ProjectPage children render correctly for any project
 *
 * For any valid ProjectData object, passing its fields as explicit named props to
 * ProjectBanner, ProjectInfo, and ProjectImages must render the correct visible output.
 */
describe('ProjectBanner — Property 4: Explicit props round-trip', () => {
  test('renders name, tagline, and description from explicit props for any valid project', () => {
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

        const nameEl = container.querySelector('h1');
        const taglineEl = container.querySelector('.tagline');
        const descEl = container.querySelector('p');

        const nameMatches = nameEl?.textContent === project.title;
        const taglineMatches = taglineEl?.textContent === project.projTagline;
        const descMatches = descEl?.textContent === project.projDescription;

        cleanup();
        return nameMatches && taglineMatches && descMatches;
      }),
      { numRuns: 100 }
    );
  });

  test('renders download link when btLink prop is provided', () => {
    const nonEmptyString = fc
      .stringMatching(/^\S[\s\S]{0,79}$/)
      .filter((s) => s.trim().length > 0);
    const fakeUrl = fc.constant('https://example.com/test-image.png');
    const fakeLink = fc.constant('https://example.com/download');

    const projectDataArb = fc.record({
      title: nonEmptyString,
      projTagline: nonEmptyString,
      projDescription: nonEmptyString,
      imgUrl: fakeUrl,
      btLink: fakeLink,
    });

    fc.assert(
      fc.property(projectDataArb, (project) => {
        const { container } = render(
          <ProjectBanner
            name={project.title}
            tagline={project.projTagline}
            description={project.projDescription}
            imageUrl={project.imgUrl}
            btLink={project.btLink}
          />
        );

        const buttonEl = container.querySelector('button');
        const hasButton = buttonEl !== null;

        cleanup();
        return hasButton;
      }),
      { numRuns: 100 }
    );
  });
});

describe('ProjectInfo — Property 4: Explicit props round-trip', () => {
  test('renders section headers from projInfo prop for any valid info array', () => {
    const nonEmptyString = fc
      .stringMatching(/^\S[\s\S]{0,79}$/)
      .filter((s) => s.trim().length > 0);

    const infoSectionArb = fc.record({
      headerName: nonEmptyString,
      listItems: fc.array(nonEmptyString, { minLength: 0, maxLength: 5 }),
    });

    fc.assert(
      fc.property(fc.array(infoSectionArb, { minLength: 1, maxLength: 4 }), (projInfo) => {
        const { container } = render(<ProjectInfo projInfo={projInfo} />);

        const h1Elements = container.querySelectorAll('h1');
        const allHeadersPresent = projInfo.every((section) =>
          Array.from(h1Elements).some((el) => el.textContent === section.headerName)
        );

        cleanup();
        return allHeadersPresent;
      }),
      { numRuns: 100 }
    );
  });

  test('renders without crashing when projInfo is undefined', () => {
    expect(() => render(<ProjectInfo projInfo={undefined} />)).not.toThrow();
  });
});

describe('ProjectImages — Property 4: Explicit props round-trip', () => {
  test('renders without crashing when images is undefined', () => {
    expect(() => render(<ProjectImages images={undefined} />)).not.toThrow();
  });

  test('renders an ImageCard for each image in the images prop', () => {
    const nonEmptyString = fc
      .stringMatching(/^\S[\s\S]{0,79}$/)
      .filter((s) => s.trim().length > 0);
    const fakeUrl = fc.constant('https://example.com/test-image.png');

    const imageItemArb = fc.record({
      imageTitle: nonEmptyString,
      image: fakeUrl,
    });

    fc.assert(
      fc.property(fc.array(imageItemArb, { minLength: 1, maxLength: 5 }), (images) => {
        const { container } = render(
          <MemoryRouter>
            <ProjectImages images={images} />
          </MemoryRouter>
        );

        const imgElements = container.querySelectorAll('img');
        // background image counts as one img; project images add more
        const hasImages = imgElements.length >= images.length;

        cleanup();
        return hasImages;
      }),
      { numRuns: 100 }
    );
  });
});
