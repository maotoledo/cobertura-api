import jwt from 'jsonwebtoken'
import { user } from '../../user.js'

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.decode(token, 'seguridad_infinita')

        if (decoded && decoded.uid === user.uid) {
            next()
        } else {
            throw new Error('No autorizado!')
        }
    } catch (e) {
        res.status(401).json({ error: e, message: 'Invalid token' })
    }

}