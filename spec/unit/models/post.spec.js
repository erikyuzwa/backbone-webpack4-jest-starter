import Post from '../../../src/models/Post';
import Posts from '../../../src/collections/posts';

describe('Unit | Models | Post', () => {

  it('should exist', () => {
    // given
    const post = new Post({});
    // then
    expect(post).toExist;
  });

  it(`should have a default content`, () => {
    // when
    const post = new Post({});

    // then
    expect(post.get('content')).toEqual('default content');
  });

  it(`should have a default title`, () => {
    // when
    const post = new Post({});

    // then
    expect(post.get('title')).toEqual('default title');
  });

  /*
  describe('#initialize', () => {

    it('should set property "pokedexId", extracted from attribute URL)', () => {
      // given
      const pokemon = new Pokemon({ url: 'http://pokeapi.co/api/v2/pokemon/1/', name: 'pikachu' });

      // then
      expect(pokemon.get('pokedexId')).to.equal('001');
    });

    it('should set property "pokedexId" to "N/A" if it can not be extracted from URL', () => {
      // given
      const pokemon = new Pokemon({ url: 'http://bad.url', name: 'pikachu' });

      // then
      expect(pokemon.get('pokedexId')).to.equal('N/A');
    });

    it('should set property "imageUrl" based on "assessts.pokemon.com" images endpoint', () => {
      // given
      const pokemon = new Pokemon({ url: 'http://pokeapi.co/api/v2/pokemon/1/', name: 'pikachu' });

      // then
      expect(pokemon.get('imageUrl')).to.equal('http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png');
    });

  });*/

});
