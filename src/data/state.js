import rendering from '../rendering';

let state = {
    stateProfile: {
        posts: [
            {id: 1,
             avatar: 'https://cdn1.flamp.ru/6e8b1e5fe1cc01a4d15e1d27c602dfa7.jpg',
             name: 'Евгения Берлицкая',
             score: 23,
             text: 'loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam.'           
            },
            {id: 2,
             avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTciJQ_YpnynaTS8lhUexchBsaYWRmWQW8DTdsHPi7jg&usqp=CAU&ec=45695923',
             name: 'Андрей Берлицкий',
             score: 54,
             text: 'loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Minus id ut tempora assumenda? Asperiores tenetur adipisci sed facere doloremque fuga tempore amet, commodi repellat? Repellat voluptate ducimus minima dolore. Aperiam.'           
            }
        ],
        postAdd: (txt) => { 
            let posts = state.stateProfile.posts;

            posts.push({
                id: posts.length + 1,
                avatar: 'https://www.meme-arsenal.com/memes/0b37d82bcfd11cb3196fa5329f3bff0f.jpg',
                name: 'Инкогнито',
                score: 0,
                text: txt,
            });
            rendering(state);
        }
    },

    stateMessages: {
        messages: [
            {text: 'Ку, вагоны смотрели?)', id: '00001'},
            {text: 'Дарова, когда на профоосмотр?', id: '00002'},
            {text: 'Тебя 1-го не будет?', id: '00003'},
            {text: 'Ты направление взял?', id: '00004'},
            {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!', id: '00005'},
            {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!', id: '00006'},
            {text: 'Ку, вагоны смотрели?)', id: '00001'},
            {text: 'Дарова, когда на профоосмотр?', id: '00002'},
            {text: 'Тебя 1-го не будет?', id: '00003'},
            {text: 'Ты направление взял?', id: '00004'},
            {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!', id: '00005'},
            {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!', id: '00006'},
            {text: 'Ку, вагоны смотрели?)', id: '00001'},
            {text: 'Дарова, когда на профоосмотр?', id: '00002'},
            {text: 'Тебя 1-го не будет?', id: '00003'},
            {text: 'Ты направление взял?', id: '00004'},
            {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!', id: '00005'},
            {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!', id: '00006'},
            {text: 'Ку, вагоны смотрели?)', id: '00001'},
            {text: 'Дарова, когда на профоосмотр?', id: '00002'},
            {text: 'Тебя 1-го не будет?', id: '00003'},
            {text: 'Ты направление взял?', id: '00004'},
            {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!', id: '00005'},
            {text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, odio, sapiente sequi veritatis sed dolores nostrum ullam quam, sint consectetur illum provident? Illo eligendi adipisci dolorum, at nobis accusamus sed!', id: '00006'}
        ],
        friends: [
            {name: 'Олег Григорашенко', src: 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg', id: '000001'},
            {name: 'Данил Чернов', src: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg', id: '000002'},
            {name: 'Павел Залога', src: 'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg', id: '000003'},
            {name: 'Евгений Кладовиков', src: 'https://download-cs.net/steam/avatars/3412.jpg', id: '000004'},
            {name: 'Роман Скляр', src: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg', id: '000005'},
            {name: 'Сергей Фокин', src: 'https://cs16planet.ru/steam-avatars/images/avatar2700.jpg', id: '000006'}
        ]
    },
}

export default state;