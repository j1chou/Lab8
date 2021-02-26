const formatVolumeIconPath = require('../assets/scripts/main');

describe('my volume icon is level', () => {

    test('3', () => {
        expect(formatVolumeIconPath(67)).toMatch('./assets/media/icons/volume-level-3.svg');
    });

    test('2', () => {
        expect(formatVolumeIconPath(34)).toMatch('./assets/media/icons/volume-level-2.svg');
    });

    test('1', () => {
        expect(formatVolumeIconPath(1)).toMatch('./assets/media/icons/volume-level-1.svg');
    });
    
    test('0', () => {
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    });
});
