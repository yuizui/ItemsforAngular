import { ItemData } from "./itemData";

/* ReadMe!!
* アイテムはここで定義します。
* classifyにはライフル、ショットガン、SMG、ハンドガン、重火器のいずれかを指定してください。
* 未設定や上記以外だと未分類項目に入れられます。
* efficiencyは[]内に'',''で繋ぐと改行されます。
*/
export const ITEMS: ItemData[] = [
    // ここはテンプレです!追加するなら下に入れてね。
    {
        item_name: '敢えて言わせてもらおう、テンプレートであると!',
        items_avatar: 'assets/img/graham.jpg',
        classify: '中村悠一',
        fire_mode: '',
        reliability: '',
        r_point_blank: '',
        r_short: '',
        r_middle: '',
        r_long: '',
        penetration: '',
        non_penetration_damage: '',
        penetration_damage: '',
        range: '',
        mag_round: '',
        kinryoku: '',
        size: '',
        silence: '',
        item_value: '',
        mag_value: '',
        cartridge: '',
        item_width: '',
        item_weight: '',
        efficiency: [
            '君の存在に心奪われた男',
            '我慢弱く、落ち着きのない男',
            'ガンダムを越えようと愚行を繰り返した男',
            '気持ち悪い男',
            '仮面の男'
        ],
        note: '乙女座'
    },
    // ここから記入
    {
        item_name: 'AK-12 (2020 model)',
        items_avatar: 'assets/img/ak12.png',
        classify: 'ライフル',
        fire_mode: 'S/2/F',
        reliability: '□□[□]',
        r_point_blank: '-40※',
        r_short: '-20※',
        r_middle: '-0',
        r_long: '-20',
        penetration: '+5',
        non_penetration_damage: '2D6+2',
        penetration_damage: '3D6+3',
        range: '300m',
        mag_round: '30',
        kinryoku: '両6/片8☆',
        size: '2×4',
        silence: '2',
        item_value: '$1100[9]',
        mag_value: '$10[6]',
        cartridge: '5.45mm×39',
        item_width: '880/940mm',
        item_weight: '3,300g',
        efficiency: [
            '狙撃-25%',
            '※次R同一目標攻撃時+20%',
            '★片手-20%'
        ],
        note: 'AKシリーズの新型。フリーフローティングバレルに変更され、遠距離の精度が向上した。一部のパーツがM4/M16と互換性がある。最新のものはフォールディングストックが採用され、運用しやすくなった。'
    },
    {
        item_name: 'AK-12 (2020 model)',
        items_avatar: 'assets/img/ak12.png',
        classify: 'ハンドガン',
        fire_mode: 'S/2/F',
        reliability: '□□[□]',
        r_point_blank: '-40※',
        r_short: '-20※',
        r_middle: '-0',
        r_long: '-20',
        penetration: '+5',
        non_penetration_damage: '2D6+2',
        penetration_damage: '3D6+3',
        range: '300m',
        mag_round: '30',
        kinryoku: '両6/片8☆',
        size: '2×4',
        silence: '2',
        item_value: '$1100[9]',
        mag_value: '$10[6]',
        cartridge: '5.45mm×39',
        item_width: '880/940mm',
        item_weight: '3,300g',
        efficiency: ['狙撃-25%', '※次R同一目標攻撃時+20%', '★片手-20%'],
        note: 'AKシリーズの新型。フリーフローティングバレルに変更され、遠距離の精度が向上した。一部のパーツがM4/M16と互換性がある。最新のものはフォールディングストックが採用され、運用しやすくなった。'
    },

]