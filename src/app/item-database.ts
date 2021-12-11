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
        items_avatar: 'assets/img/Rifle/ak12.png',
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
        item_name: 'AF AF2011',
        items_avatar: 'assets/img/Handgun/AF2011.png',
        classify: 'ハンドガン',
        fire_mode: '2',
        reliability: '00[99]',
        r_point_blank: '-10※',
        r_short: '-10※',
        r_middle: '-40',
        r_long: 'X',
        penetration: '0',
        non_penetration_damage: '2D6-1',
        penetration_damage: '3D6',
        range: '50m',
        mag_round: '16',
        kinryoku: '両6/片9☆',
        size: '2×2',
        silence: '3',
        item_value: '$1100[11]',
        mag_value: '$10[10]',
        cartridge: '.45ACP9',
        item_width: '220mm',
        item_weight: '2,200g',
        efficiency: ['★片手-20%',
                    '弾倉交換：[アイテム使用]2回'],
        note: '.45ACPの威力を倍増させるというコンセプトで作られた、改良ガバメント。ただ合わせたわけではなく、専用設計である。'
    },
    {
        //アイテム名
        item_name: 'Beretta M90 Two',
        //画像
        items_avatar: 'assets\img\Handgun\M90_Two.jpg',
        //種別
        classify: 'ハンドガン',
        //射撃モード
        fire_mode: 'S',
        //信頼性
        reliability: '00[99]',
        //至近
        r_point_blank: '0',
        //近距離
        r_short: '0',
        //中距離
        r_middle: '-40',
        //遠距離
        r_long: 'X',
        //貫通力
        penetration: '+1',
        //非貫通D
        non_penetration_damage: '1D6+2',
        //貫通D
        penetration_damage: '2D6+4',
        //射程
        range: '50m',
        //弾数
        mag_round: '12',
        //必要筋力
        kinryoku: '両5/片6',
        //CP
        size: '1x2',
        //消音LV
        silence: '4',
        //本体価格
        item_value: '$3200[14]',
        //マガジン価格
        mag_value: '$10[10]',
        //弾薬
        cartridge: '.40 S&W',
        //全長
        item_width: '216mm',
        //重量
        item_weight: '925g',
        //機能
        efficiency: [
            ''
        ],
        //説明
        note: '有名なベレッタ92をアップグレードしたバリエーション。デザインを人間工学的に再設計し、より手にフィットするようになっている。現在はM9A1の販売に移行し一般には生産されていないため、希少。日本の警察も採用している。'
    },
    {
        //アイテム名
        item_name: 'Beretta M92X',
        //画像
        items_avatar: 'assets\img\Handgun\Beretta_M92X.png',
        //種別
        classify: 'ハンドガン',
        //射撃モード
        fire_mode: 'S',
        //信頼性
        reliability: '00[99]',
        //至近
        r_point_blank: '-5',
        //近距離
        r_short: '+5',
        //中距離
        r_middle: '-34',
        //遠距離
        r_long: 'X',
        //貫通力
        penetration: '+1',
        //非貫通D
        non_penetration_damage: '1D6+1',
        //貫通D
        penetration_damage: '2D6+3',
        //射程
        range: '50m',
        //弾数
        mag_round: '17',
        //必要筋力
        kinryoku: '両5/片6',
        //CP
        size: '1x2',
        //消音LV
        silence: '4',
        //本体価格
        item_value: '$900[11]',
        //マガジン価格
        mag_value: '$10[10]',
        //弾薬
        cartridge: '9mmx19',
        //全長
        item_width: '211mm',
        //重量
        item_weight: '1,245g',
        //機能
        efficiency: [
            ''
        ],
        //説明
        note: '90シリーズの進化系。ダイナミックな射撃競技やディフェンス目的に最適な最高のパフォーマンスを目指した妥協のないピストルとなっている。'
    },
    {
        //アイテム名
        item_name: 'Beretta M93R',
        //画像
        items_avatar: 'assets\img\Handgun\Beretta_M93R.png',
        //種別
        classify: 'ハンドガン',
        //射撃モード
        fire_mode: 'S/3',
        //信頼性
        reliability: '99[98]',
        //至近
        r_point_blank: '0',
        //近距離
        r_short: '0',
        //中距離
        r_middle: '-40',
        //遠距離
        r_long: 'X',
        //貫通力
        penetration: '+1',
        //非貫通D
        non_penetration_damage: '1D6+1',
        //貫通D
        penetration_damage: '2D6+3',
        //射程
        range: '50m',
        //弾数
        mag_round: '20',
        //必要筋力
        kinryoku: '両6/片6',
        //CP
        size: '1x2',
        //消音LV
        silence: '4',
        //本体価格
        item_value: '$600[14]',
        //マガジン価格
        mag_value: '$10[10]',
        //弾薬
        cartridge: '9mmx19',
        //全長
        item_width: '240mm',
        //重量
        item_weight: '1,170g',
        //機能
        efficiency: [
            '★バースト時片手-10%'
        ],
        //説明
        note: 'イタリアでテロが頻発していた時期にベレッタが開発した、バースト可能な拳銃。民間用に販売はされておらず、公的機関からの需要があった時のみ生産・供給されている'
    },
    {
        //アイテム名
        item_name: 'Beretta M96F Custom:"Smaurai Edge"',
        //画像
        items_avatar: 'assets\img\Handgun\Beretta_M96FC_samurai_edge.jpg',
        //種別
        classify: 'ハンドガン',
        //射撃モード
        fire_mode: 'S/3',
        //信頼性
        reliability: '00[99]',
        //至近
        r_point_blank: '0',
        //近距離
        r_short: '0',
        //中距離
        r_middle: '-40',
        //遠距離
        r_long: 'X',
        //貫通力
        penetration: '+1',
        //非貫通D
        non_penetration_damage: '2D6',
        //貫通D
        penetration_damage: '3D6',
        //射程
        range: '50m',
        //弾数
        mag_round: '20',
        //必要筋力
        kinryoku: '両5/片6',
        //CP
        size: '1x2',
        //消音LV
        silence: '4',
        //本体価格
        item_value: '$500[20]',
        //マガジン価格
        mag_value: '$10[10]',
        //弾薬
        cartridge: '9mmx19',
        //全長
        item_width: '259mm',
        //重量
        item_weight: '946g',
        //機能
        efficiency: [
            '隠匿判定-20%',
            '入手にはGMの許可が必要'
        ],
        //説明
        note: '9mmパラよりも強力な.40SWを使用するM92の派生型。強烈な反動をコントロールするためのマウントレイル付スタビライザーと４ポーテッド・コンペンセイターが標準装備されている。ロングマガジンを使用するため、継戦能力に優れる。'
    },
    {
        item_name: 'Cz-75 フルオート',
        items_avatar: 'assets/img/Handgun/Cz_75_fullauto.jpg',
        classify: 'ハンドガン',
        fire_mode: 'S/F',
        reliability: '00[99]',
        r_point_blank: '0',
        r_short: '0',
        r_middle: '-40',
        r_long: 'X',
        penetration: '+1',
        non_penetration_damage: '1D6+1',
        penetration_damage: '2D6+3',
        range: '50m',
        mag_round: '20',
        kinryoku: '両5/片6',
        size: '1x2',
        silence: '4',
        item_value: '$800[10]',
        mag_value: '$6[9}',
        cartridge: '9x19mm',
        item_width: '217mm',
        item_weight: '1,325g',
        efficiency: ['グリップマガジン(マガジンが1つ入るポーチ)を持つ',
                    'グリップマガジン使用時、両手+10%、隠匿-20%'],
        note: 'CZ75の発展型で、フルオート射撃できるようになっている。一般販売されず、法執行機関に供給される。'
    },
    {
        item_name: 'Cz Shadow 2',
        items_avatar: 'assets/img/Handgun/Cz_shadow2.jpg',
        classify: 'ハンドガン',
        fire_mode: 'S',
        reliability: '00[99]',
        r_point_blank: '+2',
        r_short: '+2',
        r_middle: '-36',
        r_long: 'X',
        penetration: '+1',
        non_penetration_damage: '1D6+1',
        penetration_damage: '2D6+3',
        range: '50m',
        mag_round: '19',
        kinryoku: '両5/片6',
        size: '1x2',
        silence: '4',
        item_value: '$2100[14]',
        mag_value: '$10[10',
        cartridge: '9x19mm',
        item_width: '217mm',
        item_weight: '1,325g',
        efficiency: [        ],
        note: '世界一美しいCz75という優れたデザインガンをベースに、ガンスミスによる的確な改造とスポーツシューティング用の高品質なパーツの採用により、さらなる進化を遂げたモデル。射撃の成果を飛躍的に向上させる完璧な銃。'
    },
    {
        //アイテム名
        item_name: 'FK BRNO',
        //画像
        items_avatar: 'assets/img/Handgun/FK_BRNO.jpg',
        //種別
        classify: 'ハンドガン',
        //射撃モード
        fire_mode: 'S',
        //信頼性
        reliability: '00[95]',
        //至近
        r_point_blank: '+20',
        //近距離
        r_short: '+10',
        //中距離
        r_middle: '-0',
        //遠距離
        r_long: '-50',
        //貫通力
        penetration: '+2',
        //非貫通D
        non_penetration_damage: '2D6',
        //貫通D
        penetration_damage: '3D6+2',
        //射程
        range: '100m',
        //弾数
        mag_round: '15',
        //必要筋力
        kinryoku: '両5/片6',
        //CP
        size: '2x2',
        //消音LV
        silence: '4',
        //本体価格
        item_value: '$15,300[30]',
        //マガジン価格
        mag_value: '$1,000[25]',
        //弾薬
        cartridge: '7.5FK',
        //全長
        item_width: '240g',
        //重量
        item_weight: '1,300g',
        //機能
        efficiency: ['サプレッサー装着不可','特殊弾使用不可'
        ],
        //説明
        note: '伝説の拳銃。CZ-75をイタリアのとある銃器メーカーが改良した、世界最高峰の武器。バレル下に搭載された独自のリコイル減衰システムで反動がほとんどない。専用弾7.5FKの威力は9mm弾を凌駕し、44マグナムに匹敵する。アイアンサイトであっても150m先の静止目標を容易に狙える性能をもつ。ひとつひとつ職人が丁寧に仕上げる伝統工芸品だが、その精密さ故悪環境には弱い。        '
    },
    {
        //アイテム名
        item_name: 'H&K P30',
        //画像
        items_avatar: 'assets\img\Handgun\HK_P30.jpg',
        //種別
        classify: 'ハンドガン',
        //射撃モード
        fire_mode: 'S',
        //信頼性
        reliability: '00[99]',
        //至近
        r_point_blank: '0',
        //近距離
        r_short: '0',
        //中距離
        r_middle: '-40',
        //遠距離
        r_long: 'X',
        //貫通力
        penetration: '+1',
        //非貫通D
        non_penetration_damage: '1D6+2',
        //貫通D
        penetration_damage: '2D6+4',
        //射程
        range: '50',
        //弾数
        mag_round: '13',
        //必要筋力
        kinryoku: '両5/片6',
        //CP
        size: '1x2',
        //消音LV
        silence: '4',
        //本体価格
        item_value: '$800[10]',
        //マガジン価格
        mag_value: '$10[10}',
        //弾薬
        cartridge: '.40 S&W',
        //全長
        item_width: '181mm',
        //重量
        item_weight: '840g',
        //機能
        efficiency: [
            ''
        ],
        //説明
        note: '2006年に発売された警察向け拳銃。女性警察官からの要望によりグリップのバックストラップを交換出来るP2000を開発したが、今度は男性警察官からグリップが細いとの苦情が出るようになり、あわせてグリップパネルも交換出来るようにしたP3000を開発し、商品化した。'
    },
    {
        //アイテム名
        item_name: 'H&K USP45 Tactical',
        //画像
        items_avatar: 'assets\img\Handgun\HK_usp45_tactical.png',
        //種別
        classify: 'ハンドガン',
        //射撃モード
        fire_mode: 'S',
        //信頼性
        reliability: '00[99]',
        //至近
        r_point_blank: '0',
        //近距離
        r_short: '0',
        //中距離
        r_middle: '-40',
        //遠距離
        r_long: 'X',
        //貫通力
        penetration: '+0',
        //非貫通D
        non_penetration_damage: '2D6-1',
        //貫通D
        penetration_damage: '3D6',
        //射程
        range: '50m',
        //弾数
        mag_round: '12',
        //必要筋力
        kinryoku: '両5/片6',
        //CP
        size: '1x2',
        //消音LV
        silence: '4',
        //本体価格
        item_value: '$600[9]',
        //マガジン価格
        mag_value: '$10[10]',
        //弾薬
        cartridge: '.45ACP',
        //全長
        item_width: '201mm',
        //重量
        item_weight: '887g',
        //機能
        efficiency: [
            ''
        ],
        //説明
        note: 'USPの.45ACP仕様。'
    },
    
    {
        //アイテム名
        item_name: '',
        //画像
        items_avatar: '',
        //種別
        classify: '',
        //射撃モード
        fire_mode: '',
        //信頼性
        reliability: '[]',
        //至近
        r_point_blank: '',
        //近距離
        r_short: '',
        //中距離
        r_middle: '',
        //遠距離
        r_long: '',
        //貫通力
        penetration: '+',
        //非貫通D
        non_penetration_damage: 'D6',
        //貫通D
        penetration_damage: 'D6',
        //射程
        range: 'm',
        //弾数
        mag_round: '',
        //必要筋力
        kinryoku: '両/片',
        //CP
        size: 'x',
        //消音LV
        silence: '',
        //本体価格
        item_value: '$[]',
        //マガジン価格
        mag_value: '$[]',
        //弾薬
        cartridge: '',
        //全長
        item_width: 'mm',
        //重量
        item_weight: 'g',
        //機能
        efficiency: [
            ''
        ],
        //説明
        note: ''
    },

]