import { requestListener } from '../main';

describe('simple test', () => {
    test('is output of index.html correct', () => {
        const writeHead = jest.fn();
        const end = jest.fn();

        requestListener(null, { end, writeHead });
        expect(writeHead.mock.calls.length).toBe(1);
    });

});
