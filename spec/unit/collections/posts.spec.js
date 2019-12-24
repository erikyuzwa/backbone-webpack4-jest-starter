import Posts from '../../../src/collections/posts';

describe('Unit | Collections | Posts', () => {

  it('should exist', () => {
    // given
    const posts = new Posts({});

    // then
    expect(posts).toExist;
  });


  it(`should have one post by default`, () => {
    // when
    const posts = new Posts({});

    // then
    expect(posts.length).toEqual(1);
  });

});
