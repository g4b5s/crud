const { MongoClient } = require('mongodb');

const username = 'yourname';
const password = '27AG12TS';
const cluster = 'cluster0';
const dbname = 'musicyourname';
const collectionName = 'songs';

const url = `mongodb+srv://yourname:27AG12TS@cluster0.ifmfj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const client = new MongoClient(url);

async function main() {
    try {
        // Conectar no banco de dados
        await client.connect();
        console.log('Conectado ao MongoDB Atlas');
        const db = client.db(dbname);
        const collection = db.collection(collectionName);

        // Inserir uma nova música
        let newSong = { name: 'Until I Fond You', 
                        address: 'https://www.youtube.com/watch?v=kPlSyYtE63M', 
                        description: 'Essa música me lembra bastante o início da nossa jornada, ainda quando estávamos nos conhecendo eu escutei essa música e vi a tradução, mesmo que não estivéssemos namorando ainda, eu já estava querendo dedicar essa música pra você, talvez fosse por causa das grandes emoções que eu estava sentindo naqueles dias, mas ainda bem que não me arrependi de ter pensado em te dedicar antes de começarmos a namorar e até hoje não me arrependo de pensar em você quando a escuto. Não poderíamos ser só simples amigos, e ainda bem que eu te achei.' };
        let resultadoInsercao = await collection.insertOne(newSong);
        console.log('Música inserida', resultadoInsercao.insertedId)

        newSong = { name: 'Dandelions', 
                    address: 'https://www.youtube.com/watch?v=W8a4sUabCUo',
                    description: 'A primeira vez que escutei essa música foi quando você me deu aquele presente. Eu achei ela muito linda e também vi seu nome lá, eu gosto bastante das declarações de amor dessa música, principalmente por falar em alguém ser de alguém, e como a Ruth B, eu também me sinto em um campo cheio de dentes-de-leão pedindo pra que um dia você seja minha, um dos dias que eu mais espero na minha vida, que nós sejamos completamente um do outro, meu grande amor.' };
        resultadoInsercao = await collection.insertOne(newSong);
        console.log('Música inserida', resultadoInsercao.insertedId)

        newSong = { name: 'Oceano', 
                    address: 'https://www.youtube.com/watch?v=P-lxOj0XpEE',
                    description: 'Pra ser sincero, eu não gosto tanto dessa música e ela nem faz tanto o meu estilo, porém, ela é importante pra mim porque tem seu nome, logo tem história. Um dia qualquer quando estávamos escutando as minhas e suas músicas eu coloquei essa porque você conhecia, e pra ser sincero, eu só fiquei olhando pra você com a cabeça apoiada na mesa e sem entender nada do que o Djavan estava falando, mas foi algo bom. E pra ser sincero, as vezes eu percebo que estou tão apegado a você que sinto uma dor extrema, por pensar em tantas coisas, como ele fala, me esqueço que amar é quase uma dor.'};
        resultadoInsercao = await collection.insertOne(newSong);
        console.log('Música inserida', resultadoInsercao.insertedId)

        newSong = { name: 'Fly Me To The Moon', 
                    address: 'https://www.youtube.com/watch?v=ZEcqHA7dbwM',
                    description: 'Me deparei com Frank Sinatra novamente após ir na casa dos gêmeos em janeiro e percebi novamente o quanto eu gostava de jazz, me lembro de escutar bastante na época que estudava pra prova de matrizes da Jessyka, e logo depois você apareceu aqui em casa e mudou a minha tarde, com uma blusa rosa e saia branca. Naquele fim de dia nos assistimos Harry Potter e a Ordem da Fênix, estávamos juntos e nada mais importava. Resumindo em outras palavras, meu amor, me beije, em outras palavras, meu amor, eu amo você.' };
        resultadoInsercao = await collection.insertOne(newSong);
        console.log('Música inserida', resultadoInsercao.insertedId)

        newSong = { name: 'Future Days', 
                    address: 'https://www.youtube.com/watch?v=yS1HovHNZlE',
                    description: 'Future Days é uma das minhas músicas favoritas, e talvez seja ela que me faz gostar tanto de The Last Of Us parte 2, assim como Until I Found You, eu já pensei em te dedicar essa música, mas pra ser sincero quando a escutei pela primeira vez, não tinha ninguém pra pensar, só ficava bastante triste, tanto por causa do jogo e tanto pela melancolia da música. Eu acredito, meu bem, nos nossos dias futuros, quero e pretendo acreditar cada vez mais, pois eu quero muito dias meus e seus, dias somente nossos.' };
        resultadoInsercao = await collection.insertOne(newSong);
        console.log('Música inserida', resultadoInsercao.insertedId)

        newSong = { name: 'Simplicidade', 
                    address: 'https://www.youtube.com/watch?si=YCTfASFqEVX0vWEw&v=gU738HDN24Q&feature=youtu.be',
                    description: 'Te apresentei essa canção nas nossas primeiras conversas, porque eu gostava bastante de João Manô, e eu acho essa música muito linda também e vejo você nela, eu espero que no futuro independentemente de tudo possamos ter um ao outro, na nossa simplicidade, ter nossa casinha, amor e um quintal, ter espaço pra quando os nossos chegar.' };
        resultadoInsercao = await collection.insertOne(newSong);
        console.log('Música inserida', resultadoInsercao.insertedId)

        newSong = { name: 'Diga Sim Pra Mim', 
                    address: 'https://www.youtube.com/watch?v=oXy3UulzmW0',
                    description: 'Essa música eu escutei também na casa dos gêmeos, quando fui a primeira vez lá, e logo percebi o quão romântica ela é. Acho que o compositor se esforçou bastante pra compor essa perfeição. E assim como todas as outras músicas eu também vejo seu nome nela, e diferente de todas as outras, eu espero poder chegar em um dia e dizer que essa é realmente a nossa música, no dia em que você dizer sim pra mim e a gente se casar numa manhã de domingo a beira mar ou em uma noite de luar, meu grande amor.' };
        resultadoInsercao = await collection.insertOne(newSong);
        console.log('Música inserida', resultadoInsercao.insertedId)

        //Listar todas as músicas
        const songs = await collection.find({}).toArray();
        console.log('Listar músicas', songs);

        // Atualizar
        const filtroAtualizacao = { _id: resultadoInsercao.insertedId };
        const atualizacao = { $set: { name: '' } };
        await collection.updateOne(filtroAtualizacao, atualizacao);
        console.log('Música atualizada');

        //Remover
        const filtroRemocao = {"": ""};
        await collection.deleteMany(filtroRemocao);
        console.log('Música removida')

        
    } catch (err) {
        console.error(err);
    } finally {
      // fechar a conexão com o Mongo Atlas
      await client.close();

    } 
}   

main(). catch(console.error);