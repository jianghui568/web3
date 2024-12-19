import {reactive} from "vue";
import armleft from './arm-left.png';
import armright from './arm-right.png';
import eye1 from './eye-1.png';
import eye10 from './eye-10.png';
import eye11 from './eye-11.png';
import eye2 from './eye-2.png';
import eye3 from './eye-3.png';
import eye4 from './eye-4.png';
import eye5 from './eye-5.png';
import eye6 from './eye-6.png';
import eye7 from './eye-7.png';
import eye8 from './eye-8.png';
import eye9 from './eye-9.png';
import feetleft from './feet-left.png';
import feetright from './feet-right.png';
import forearmleft from './forearm-left.png';
import forearmright from './forearm-right.png';
import handleft from './hand-left.png';
import handright from './hand-right.png';
import head1 from './head-1.png';
import head2 from './head-2.png';
import head3 from './head-3.png';
import head4 from './head-4.png';
import head5 from './head-5.png';
import head6 from './head-6.png';
import head7 from './head-7.png';
import head8 from './head-8.png';
// import legcat from './leg-cat.png';
import legleft from './leg-left.png';
import legright from './leg-right.png';
import mouth from './mouth.png';
import shirt1 from './shirt-1.png';
import shirt2 from './shirt-2.png';
import shirt3 from './shirt-3.png';
import shirt4 from './shirt-4.png';
import shirt5 from './shirt-5.png';
import shirt6 from './shirt-6.png';
import thighleft from './thigh-left.png';
import thighright from './thigh-right.png';
import torso from './torso.png';

export class ZombieSkin {
    private static _instance: ZombieSkin | null = null;

    // 定义响应式的 skin 对象
    private skin = reactive({
        head: head1,
        eye: eye1,
        shirt: shirt1,
        torso: torso,
        mouth: mouth,
        armLeft: armleft,
        armRight: armright,
        feetLeft: feetleft,
        feetRight: feetright,
        forearmLeft: forearmleft,
        forearmRight: forearmright,
        handLeft: handleft,
        handRight: handright,
        legLeft: legleft,
        legRight: legright,
        thighLeft: thighleft,
        thighRight: thighright,
    });

    private headCache:{[key:number]: any} = {
        1:head1,
        2:head2,
        3:head3,
        4:head4,
        5:head5,
        6:head6,
        7:head7,
        8:head8,
    };
    private eyeCache:{[key:number]: any} = {
        1: eye1,
        10: eye10,
        11: eye11,
        2: eye2,
        3: eye3,
        4: eye4,
        5: eye5,
        6: eye6,
        7: eye7,
        8: eye8,
        9: eye9,
    };
    private shirtCache:{[key:number]: any} = {
        1:shirt1,
        2:shirt2,
        3:shirt3,
        4:shirt4,
        5:shirt5,
        6:shirt6,
    };

    // 获取单例实例
    protected static instance(): ZombieSkin {
        if (!ZombieSkin._instance) {
            ZombieSkin._instance = new ZombieSkin();
        }
        return ZombieSkin._instance;
    }

    public static getConfig() {
        return ZombieSkin.instance().skin;
    }

    private constructor() {
    }

    // 改变头部
    public static changeHead(dna: number) {
        ZombieSkin.instance().skin.head = ZombieSkin.instance().headCache[dna];
        return ZombieSkin.instance().skin;
    }

    // 改变眼睛
    public static changeEye(dna: number) {
        ZombieSkin.instance().skin.eye = ZombieSkin.instance().eyeCache[dna];
        return ZombieSkin.instance().skin;
    }


    // 改变衣服
    public static changeShirt(dna: number) {
        ZombieSkin.instance().skin.shirt = ZombieSkin.instance().shirtCache[dna];
        return ZombieSkin.instance().skin;
    }
}
