import Post from './post.model';

export const createPost = async (req, res) => {
  req.assert('title', 'Title is required.').exists();
  req.assert('link', 'Link is required.').exists();

  const errors = req.validationErrors();

  if (errors) {
    return res.status(412).json({
      status: 'error',
      data: null,
      errors
    });
  }

  try {
    const { title, link } = req.body;
    const existPost = await Post.findOne({ title });

    if (existPost) {
      return res.status(302).json({
        status: 'error',
        data: null,
        errors: {
          message: 'Title already token.'
        }
      });
    }

    const post = await Post.create({ title, link });

    return res.json({
      status: 'success',
      data: post,
      errors: null
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      data: null,
      errors: String(err)
    });
  }
};

export const postList = async (req, res) => {
  try {
    let { limit, search, page } = req.query;

    limit = limit ? limit : 10;
    page = page ? page : 0;

    const posts = await Post.find()
      .limit(limit)
      .skip(limit * page)
      .sort({
        title: 'asc'
      });

    return res.json({
      status: 'success',
      data: posts,
      errors: null
    });
  } catch (err) {
    return res.status(500).json({
      status: 'error',
      data: null,
      errors: String(err)
    });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findByIdAndRemove(id);

    if (!post) {
      return res.status(404).json({
        status: 'error',
        data: null,
        errors: {
          message: 'Post not found.'
        }
      });
    }

    return res.json({
      status: 'success',
      data: post,
      errors: null
    });
  } catch(err) {
    return res.status(500).json({
      status: 'error',
      data: null,
      errors: String(err)
    });
  }
};
