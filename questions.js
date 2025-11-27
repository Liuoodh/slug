// BDSM测试题目数据
const questions = [
    {
        id: 1,
        question: "在床上，你最想扮演什么角色？",
        options: [
            { text: "绝对的主人，完全掌控一切", scores: { D: 5, S: 0, Sa: 0, M: 0, Sw: 0 } },
            { text: "乖顺的宠物，完全服从命令", scores: { D: 0, S: 5, Sa: 0, M: 0, Sw: 0 } },
            { text: "今天是主人，明天当奴隶", scores: { D: 0, S: 0, Sa: 0, M: 0, Sw: 5 } }
        ]
    },
    {
        id: 2,
        question: "当伴侣命令你跪下时，你会？",
        options: [
            { text: "绝不！应该跪下的是TA", scores: { D: 5, S: 0, Sa: 1, M: 0, Sw: 0 } },
            { text: "立刻照做，这让我兴奋", scores: { D: 0, S: 5, Sa: 0, M: 1, Sw: 0 } },
            { text: "看我今天想当主还是奴", scores: { D: 0, S: 0, Sa: 0, M: 0, Sw: 5 } }
        ]
    },
    {
        id: 3,
        question: "手铐、绳子、眼罩，你的选择是？",
        options: [
            { text: "把TA绑起来，让我享受", scores: { D: 5, S: 0, Sa: 2, M: 0, Sw: 0 } },
            { text: "绑住我，剥夺我的自由", scores: { D: 0, S: 5, Sa: 0, M: 2, Sw: 0 } },
            { text: "今天绑你，明天绑我", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 5 } }
        ]
    },
    {
        id: 4,
        question: "一巴掌扇在屁股上，你的反应是？",
        options: [
            { text: "我喜欢看TA被打红的样子", scores: { D: 2, S: 0, Sa: 5, M: 0, Sw: 0 } },
            { text: "越打越爽，求你更用力", scores: { D: 0, S: 2, Sa: 0, M: 5, Sw: 0 } },
            { text: "轮流打，一人一次", scores: { D: 0, S: 0, Sa: 2, M: 2, Sw: 5 } }
        ]
    },
    {
        id: 5,
        question: "做爱时，谁说了算？",
        options: [
            { text: "我说怎么做就怎么做", scores: { D: 5, S: 0, Sa: 1, M: 0, Sw: 0 } },
            { text: "听TA的，我只负责享受", scores: { D: 0, S: 5, Sa: 0, M: 0, Sw: 0 } },
            { text: "轮流掌权，今天你明天我", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 5 } }
        ]
    },
    {
        id: 6,
        question: "主人和奴隶的游戏，你想玩吗？",
        options: [
            { text: "我就是主人，TA必须服从", scores: { D: 5, S: 0, Sa: 1, M: 0, Sw: 0 } },
            { text: "让我当你的奴隶吧", scores: { D: 0, S: 5, Sa: 0, M: 1, Sw: 0 } },
            { text: "轮流当主人和奴隶才爽", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 5 } }
        ]
    },
    {
        id: 7,
        question: "伴侣想要支配你，你的反应是？",
        options: [
            { text: "做梦！我才是主导者", scores: { D: 5, S: 0, Sa: 1, M: 0, Sw: 0 } },
            { text: "太好了，支配我吧", scores: { D: 0, S: 5, Sa: 0, M: 1, Sw: 0 } },
            { text: "今天让你支配，明天换我", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 5 } }
        ]
    },
    {
        id: 8,
        question: "\"贱人\"、\"小婊子\"这样的话，你觉得？",
        options: [
            { text: "我喜欢这样骂TA", scores: { D: 2, S: 0, Sa: 5, M: 0, Sw: 0 } },
            { text: "骂我吧，我好兴奋", scores: { D: 0, S: 2, Sa: 0, M: 5, Sw: 0 } },
            { text: "偶尔玩玩这种调调", scores: { D: 0, S: 0, Sa: 2, M: 2, Sw: 4 } }
        ]
    },
    {
        id: 9,
        question: "日常生活中，你希望谁制定规矩？",
        options: [
            { text: "我定规矩，TA必须遵守", scores: { D: 5, S: 0, Sa: 0, M: 0, Sw: 0 } },
            { text: "给我定规矩，我需要管教", scores: { D: 0, S: 5, Sa: 0, M: 0, Sw: 0 } },
            { text: "今天你定，明天我定", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 5 } }
        ]
    },
    {
        id: 10,
        question: "不听话就要惩罚，你的态度？",
        options: [
            { text: "我来惩罚TA，越狠越好", scores: { D: 3, S: 0, Sa: 5, M: 0, Sw: 0 } },
            { text: "惩罚我吧，我喜欢", scores: { D: 0, S: 3, Sa: 0, M: 5, Sw: 0 } },
            { text: "轮流惩罚更刺激", scores: { D: 1, S: 1, Sa: 2, M: 2, Sw: 5 } }
        ]
    },
    {
        id: 11,
        question: "权力交换：你要掌握还是交出？",
        options: [
            { text: "把权力交给我，我要全部", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "拿走我的权力，我全给你", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "互相交换，玩得更嗨", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 3 } }
        ]
    },
    {
        id: 12,
        question: "看到TA痛苦挣扎的样子，你会？",
        options: [
            { text: "更兴奋，想继续折磨", scores: { D: 1, S: 0, Sa: 3, M: 0, Sw: 1 } },
            { text: "如果是我造成的更爽", scores: { D: 2, S: 0, Sa: 3, M: 0, Sw: 1 } },
            { text: "看情况，有时候挺刺激", scores: { D: 1, S: 1, Sa: 1, M: 0, Sw: 2 } }
        ]
    },
    {
        id: 13,
        question: "被人看着做爱，你的想法是？",
        options: [
            { text: "让他们看我怎么玩TA", scores: { D: 2, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "展示我的身体让我兴奋", scores: { D: 0, S: 2, Sa: 0, M: 2, Sw: 1 } },
            { text: "轮流展示，都很刺激", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 3 } }
        ]
    },
    {
        id: 14,
        question: "做爱的节奏和速度，谁来控制？",
        options: [
            { text: "当然是我，想快就快想慢就慢", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "TA说了算，我只管爽", scores: { D: 0, S: 3, Sa: 0, M: 0, Sw: 1 } },
            { text: "轮流控制更有趣", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 3 } }
        ]
    },
    {
        id: 15,
        question: "臣服和跪拜，你怎么看？",
        options: [
            { text: "TA必须臣服在我脚下", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "跪下臣服让我安心", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "可以轮流跪", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 3 } }
        ]
    },
    {
        id: 16,
        question: "各种情趣玩具，你想怎么用？",
        options: [
            { text: "用它们折磨TA到求饶", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "在我身上用，越多越好", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 1 } },
            { text: "互相使用更刺激", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 17,
        question: "伴侣请求做某事时，你会？",
        options: [
            { text: "别请求，听命令！", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "我很乐意照办", scores: { D: 0, S: 3, Sa: 0, M: 0, Sw: 1 } },
            { text: "看今天我是什么角色", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 3 } }
        ]
    },
    {
        id: 18,
        question: "羞耻play，比如露出、当众...",
        options: [
            { text: "让TA当众出丑真爽", scores: { D: 2, S: 0, Sa: 3, M: 0, Sw: 1 } },
            { text: "羞辱我吧，越羞耻越兴奋", scores: { D: 0, S: 2, Sa: 0, M: 3, Sw: 1 } },
            { text: "偶尔玩玩挺刺激", scores: { D: 0, S: 0, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 19,
        question: "做爱时，你对控制的需求有多强？",
        options: [
            { text: "必须完全由我掌控", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "完全被控制才爽", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "今天我控，明天被控", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 3 } }
        ]
    },
    {
        id: 20,
        question: "制定各种禁忌规则，你的看法？",
        options: [
            { text: "我来定，TA必须遵守", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "给我定规则，约束我", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "可以有但要灵活", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 2 } }
        ]
    },
    {
        id: 21,
        question: "蒙眼、堵嘴、塞耳朵，剥夺感官？",
        options: [
            { text: "让TA什么都感受不到", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "剥夺我的感官吧", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 1 } },
            { text: "轮流剥夺更刺激", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 3 } }
        ]
    },
    {
        id: 22,
        question: "看到TA脆弱无助的样子？",
        options: [
            { text: "我的控制欲爆棚", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "让我更想依恋TA", scores: { D: 0, S: 2, Sa: 0, M: 1, Sw: 1 } },
            { text: "要看当时情况", scores: { D: 1, S: 1, Sa: 1, M: 0, Sw: 2 } }
        ]
    },
    {
        id: 23,
        question: "身体接触和爱抚，谁主动？",
        options: [
            { text: "我的手，我的节奏", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "躺好被TA抚摸", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "互相抚摸才爽", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 3 } }
        ]
    },
    {
        id: 24,
        question: "让TA等待，延迟高潮？",
        options: [
            { text: "吊着TA的胃口最爽", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "被吊着的感觉太刺激", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 1 } },
            { text: "偶尔玩玩这招", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 25,
        question: "占有欲：TA只能是我的？",
        options: [
            { text: "必须的，TA是我的私有物", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "我只属于TA，被占有真好", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "适度占有就好", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 26,
        question: "\"跪下\"、\"张嘴\"、\"趴好\"，这样的命令？",
        options: [
            { text: "我来发号施令", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "命令我，我照做", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "看当下谁是主人", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 3 } }
        ]
    },
    {
        id: 27,
        question: "遇到反抗和挑衅时？",
        options: [
            { text: "调教到TA乖乖服从", scores: { D: 3, S: 0, Sa: 3, M: 0, Sw: 1 } },
            { text: "故意反抗等着被惩罚", scores: { D: 0, S: 2, Sa: 0, M: 2, Sw: 2 } },
            { text: "看对方怎么回应", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 3 } }
        ]
    },
    {
        id: 28,
        question: "性爱中的仪式感，比如固定姿势、称呼？",
        options: [
            { text: "必须有，我来制定", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "我喜欢遵守这些仪式", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "偶尔有点仪式感不错", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 2 } }
        ]
    },
    {
        id: 29,
        question: "理想的性爱关系是？",
        options: [
            { text: "我是绝对的主宰", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 0 } },
            { text: "完全臣服于TA", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 0 } },
            { text: "角色随时切换", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 3 } }
        ]
    },
    {
        id: 30,
        question: "总体来说，你认为自己是？",
        options: [
            { text: "天生的主人和统治者", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 0 } },
            { text: "天生的奴隶和服从者", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 0 } },
            { text: "可主可奴的多面手", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 3 } }
        ]
    },
    {
        id: 31,
        question: "公共场合偷偷摸一把？",
        options: [
            { text: "我喜欢主导这种刺激", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "主人让我配合我就配合", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 1 } },
            { text: "看情况，有时候挺刺激", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 32,
        question: "\"主人\"、\"奴隶\"、\"小狗\"这样的称呼？",
        options: [
            { text: "叫我主人，这是必须的", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "我愿意这样称呼TA", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "可以尝试各种称呼", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 3 } }
        ]
    },
    {
        id: 33,
        question: "TA犯错了，该怎么办？",
        options: [
            { text: "必须惩罚，打屁股", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "我犯错了请惩罚我", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 1 } },
            { text: "看错误性质决定", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 34,
        question: "吻痕、咬痕、抓痕，这些标记？",
        options: [
            { text: "在TA身上留满我的印记", scores: { D: 3, S: 0, Sa: 3, M: 0, Sw: 1 } },
            { text: "标记我吧，越多越好", scores: { D: 0, S: 2, Sa: 0, M: 3, Sw: 1 } },
            { text: "偶尔留点印记", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 35,
        question: "签订主奴契约？",
        options: [
            { text: "必须签，我是甲方", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "我愿意签订并遵守", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "口头约定就够了", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 2 } }
        ]
    },
    {
        id: 36,
        question: "训练和调教？",
        options: [
            { text: "把TA调教成我想要的样子", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "调教我，塑造我", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 1 } },
            { text: "互相学习进步", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 37,
        question: "用绳子把TA绑成艺术品？",
        options: [
            { text: "我享受绑缚的过程", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "被绳子束缚太爽了", scores: { D: 0, S: 3, Sa: 0, M: 3, Sw: 1 } },
            { text: "轮流当绳师和模特", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 3 } }
        ]
    },
    {
        id: 38,
        question: "吵架之后怎么和好？",
        options: [
            { text: "TA必须认错补偿我", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "我主动认错求原谅", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "看谁的错就谁道歉", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 3 } }
        ]
    },
    {
        id: 39,
        question: "滴蜡、冰块，温度刺激？",
        options: [
            { text: "看TA被折磨的表情", scores: { D: 2, S: 0, Sa: 3, M: 0, Sw: 1 } },
            { text: "刺激我，我喜欢", scores: { D: 0, S: 2, Sa: 0, M: 3, Sw: 1 } },
            { text: "可以适度尝试", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 40,
        question: "宠物play：汪汪叫？",
        options: [
            { text: "当主人，养个乖宠物", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "让我当小狗吧", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 1 } },
            { text: "角色扮演挺有趣", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 3 } }
        ]
    },
    {
        id: 41,
        question: "控制TA的姿势和动作？",
        options: [
            { text: "保持姿势别动，不准就惩罚", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "摆好姿势等待主人", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 1 } },
            { text: "偶尔玩玩姿势控制", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 42,
        question: "心理层面的控制和暗示？",
        options: [
            { text: "我擅长心理支配", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "我容易被心理暗示", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 1 } },
            { text: "需要相互理解信任", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 43,
        question: "给TA挑选情趣内衣？",
        options: [
            { text: "穿什么我说了算", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "主人要我穿什么就穿什么", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "互相建议搭配", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 2 } }
        ]
    },
    {
        id: 44,
        question: "鞭子、板子抽打身体？",
        options: [
            { text: "我喜欢挥舞鞭子", scores: { D: 2, S: 0, Sa: 3, M: 0, Sw: 1 } },
            { text: "抽打我，我喜欢这感觉", scores: { D: 0, S: 2, Sa: 0, M: 3, Sw: 1 } },
            { text: "轻微的可以试试", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 45,
        question: "跪拜仪式？",
        options: [
            { text: "必须跪下向我臣服", scores: { D: 3, S: 0, Sa: 2, M: 0, Sw: 1 } },
            { text: "跪拜主人是我的荣幸", scores: { D: 0, S: 3, Sa: 0, M: 2, Sw: 1 } },
            { text: "看关系深度决定", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 3 } }
        ]
    },
    {
        id: 46,
        question: "安全词的重要性？",
        options: [
            { text: "必须设定，我会尊重", scores: { D: 2, S: 1, Sa: 1, M: 1, Sw: 2 } },
            { text: "必须有，这是我的保护", scores: { D: 1, S: 3, Sa: 0, M: 2, Sw: 2 } },
            { text: "非常重要的保护机制", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } }
        ]
    },
    {
        id: 47,
        question: "主人和奴隶的等级关系？",
        options: [
            { text: "必须有明确的上下级", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "我是下位，TA是上位", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "可以有但不要太严格", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 2 } }
        ]
    },
    {
        id: 48,
        question: "事后温柔的关怀？",
        options: [
            { text: "我会照顾好TA", scores: { D: 2, S: 1, Sa: 1, M: 0, Sw: 2 } },
            { text: "我非常需要被呵护", scores: { D: 0, S: 3, Sa: 0, M: 3, Sw: 2 } },
            { text: "双方都需要互相关怀", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 3 } }
        ]
    },
    {
        id: 49,
        question: "想要长期的主奴关系吗？",
        options: [
            { text: "24/7全天候主导", scores: { D: 3, S: 0, Sa: 1, M: 0, Sw: 1 } },
            { text: "24/7全天候服从", scores: { D: 0, S: 3, Sa: 0, M: 1, Sw: 1 } },
            { text: "可以尝试但不确定", scores: { D: 1, S: 1, Sa: 0, M: 0, Sw: 2 } }
        ]
    },
    {
        id: 50,
        question: "对于BDSM，你现在的态度是？",
        options: [
            { text: "超级感兴趣，想深入探索", scores: { D: 2, S: 2, Sa: 2, M: 2, Sw: 3 } },
            { text: "有点兴趣，想尝试看看", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 2 } },
            { text: "只是好奇想了解", scores: { D: 1, S: 1, Sa: 1, M: 1, Sw: 1 } }
        ]
    }
];

// 结果描述
const resultDescriptions = {
    D: {
        name: "支配者 (Dominant)",
        shortDesc: "喜欢掌控和引导关系的发展",
        fullDesc: "你在亲密关系中倾向于扮演主导和控制的角色。你享受制定规则、发号施令，并引导伴侣的行为。你有强烈的掌控欲，希望在关系中处于领导地位。你可能喜欢通过各种方式来展示你的权威，并从伴侣的服从中获得满足感。",
        traits: ["领导力强", "控制欲强", "责任感", "保护欲", "决断力"],
        suggestions: "记得尊重伴侣的界限，保持良好的沟通，确保双方都感到舒适和安全。",
        plays: ["24/7权力交换", "规则制定与执行", "命令与服从", "权力仪式", "训练调教", "宠物play(主人)", "契约关系", "姿势控制", "心理支配", "奖惩机制"]
    },
    S: {
        name: "顺从者 (Submissive)",
        shortDesc: "享受被引导和照顾的感觉",
        fullDesc: "你在亲密关系中倾向于顺从和服从的角色。你享受被引导、被照顾的感觉，愿意将控制权交给信任的伴侣。你从服从中获得安全感和满足感，喜欢让伴侣为你做决定。你可能需要明确的指导和规则来感受到被重视。",
        traits: ["信任感强", "愿意服从", "需要安全感", "忠诚", "敏感"],
        suggestions: "保持自我意识，确保你的需求被听到和尊重。建立安全词和界限很重要。",
        plays: ["服从训练", "规则遵守", "宠物play(宠物)", "臣服仪式", "被束缚", "姿势维持", "权力交换", "感官剥夺", "被控制", "契约关系"]
    },
    Sa: {
        name: "施虐者 (Sadist)",
        shortDesc: "从给予刺激中获得快感",
        fullDesc: "你在亲密互动中倾向于施虐的角色。你可能从给予伴侣身体或心理上的刺激中获得快感，享受看到对方的反应。这不代表你想要真正伤害对方，而是在安全、同意的前提下探索强烈的感官体验。",
        traits: ["感官敏锐", "富有创造力", "善于观察", "掌控欲", "细心"],
        suggestions: "始终确保获得明确的同意，了解伴侣的界限，保持事后关怀（aftercare）。",
        plays: ["恋痛游戏", "温度play(蜡烛/冰块)", "击打类刺激", "身体标记", "语言羞辱", "感官刺激", "驯服play", "轻度鞭打", "夹子/钳子", "边缘控制"]
    },
    M: {
        name: "受虐者 (Masochist)",
        shortDesc: "从接受刺激中获得快感",
        fullDesc: "你倾向于从接受一定程度的身体或心理刺激中获得快感。你可能享受适度的疼痛、羞辱或其他强烈感受带来的兴奋感。这是一种在安全环境下探索感官极限的方式，能让你感受到独特的愉悦。",
        traits: ["勇于探索", "感受力强", "信任感", "享受挑战", "敏感"],
        suggestions: "清楚表达你的界限和安全词，确保伴侣了解你的需求和底线。",
        plays: ["恋痛接受", "被击打", "温度刺激接受", "身体标记接受", "羞辱play", "感官刺激接受", "被束缚", "延迟满足", "边缘play", "强度挑战"]
    },
    Sw: {
        name: "切换者 (Switch)",
        shortDesc: "灵活切换不同角色",
        fullDesc: "你在亲密关系中具有高度的灵活性，能够根据情境和心情在支配和服从之间自如切换。你享受探索不同角色带来的多样体验，不受单一角色的限制。这使你能够更全面地理解和体验BDSM关系的各个方面。",
        traits: ["适应性强", "开放包容", "富有同理心", "灵活变通", "好奇心强"],
        suggestions: "与伴侣保持清晰的沟通，明确当前的角色和期望，避免混淆。",
        plays: ["角色切换", "双向权力交换", "多样化探索", "情境适应", "Dom与Sub体验", "施虐与受虐尝试", "灵活调教", "实验性play", "创意结合", "全方位体验"]
    }
};
