export const config = {
    client:{
        server:{
            protocol:'http',
            host:'zar.hosthot.ru'
        },
        endpoint:{
            getPokemons:{
                metod:'GET',
                uri:{
                    pathname:'/api/v1/pokemons',
                }
            }
        }
    }
}
export default config;
