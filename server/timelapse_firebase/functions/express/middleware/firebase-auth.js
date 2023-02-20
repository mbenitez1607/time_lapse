const { getAuth } = require('firebase-admin/auth');

async function firebaseAuth(req, res, next) {
  const regex = /Bearer (.+)/i;
  try {
    const idToken =
      req.headers['authorization'].match(regex)?.[1];
    req.token = await getAuth().verifyIdToken(idToken);
    next();
  } catch (err) {
    res
      .status(401)
      .json({ error: { code: 'unauthenticated' } });
  }
}

module.exports = firebaseAuth;