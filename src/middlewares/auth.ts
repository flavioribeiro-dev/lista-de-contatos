import type { RequestHandler } from "express";

export const privateRequest: RequestHandler = async (req, res, next) => {
    if(req.headers.authorization) {
        let authorizationToken = req.headers.authorization.split(" ")[2];
        if(authorizationToken === "1234") {
            return next();
        }
        return res.json({ error: "acesso não autorizado" });
    }
}