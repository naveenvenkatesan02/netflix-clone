const jwt = require('jsonwebtoken');
const secertToken = '6b6c76c48c85d7c2bea73d670cfc6e5933c2a6fbeb405175c6ba47c50b3d6b8737ee3f';
function verifyToken(req, res, next) {
const token = req.headers['authorization'];
if (!token) return res.status(401).json({ error: 'Access denied' });
try {
 const decoded = jwt.verify(token,secertToken );
 req.userId = decoded.userId;
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = verifyToken;