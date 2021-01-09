import { requestListener } from './src/main';

describe('simple test', () => {
    test('is otput of index.html correct', () => {
        const writeHead = jest.fn();
        const end = jest.fn();

        requestListener(null, { end, writeHead });
        expect(writeHead.mock.calls.length).toBe(1);
    });

    test("i'm always failing", () => {
        expect(1).toBe(2);
    });
});
