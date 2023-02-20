const {
    getAuth: getClientAuth,
    signInWithEmailAndPassword,
  } = require('firebase/auth');
  const {
    getAuth: getAdminAuth,
  } = require('firebase-admin/auth');
  
  async function login(req, res) {
    const { email, password } = req.body;
    try {
      const credential = await signInWithEmailAndPassword(
        getClientAuth(),
        email,
        password
      );
      const token = await getAdminAuth().createCustomToken(
        credential.user.uid
      );
      res.status(200).json({ token });
    } catch (error) {
      if (
        error.code === 'auth/wrong-password' ||
        error.code === 'auth/user-not-found'
      ) {
        res.status(403);
      } else {
        res.status(500);
      }
      res.json({
        error: { code: error.code.replace('auth/', '') },
      });
    }
  }
  
  module.exports = login;