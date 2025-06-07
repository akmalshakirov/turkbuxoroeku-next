import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { name, telnum, message, service } = req.body;

        // if (!name || !telnum || !message || !service) {
        //     return res.status(400).json({
        //         error: "Все поля должны быть заполнены!",
        //     });
        // }

        console.log("Qabul qilingan ma'lumotlar:", {
            name,
            telnum,
            message,
            service,
        });

        return res.status(200).json({
            message: "Данные успешно сохранены",
        });
    } else {
        return res
            .status(405)
            .json({ message: "Принимаются только POST-запросы!" });
    }
}
