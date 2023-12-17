import {breakAt, BreakPointSizes} from './BreakPointSize';
import '@testing-library/jest-dom';
test.each([
    [BreakPointSizes.sm],
    [BreakPointSizes.md],
    [BreakPointSizes.lg],
    [BreakPointSizes.xl]
])('break at %i px size', (size) => {
    expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`)
})