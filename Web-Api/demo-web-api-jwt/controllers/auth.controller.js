import memberService from "../services/member.service.js";
import { generateJwt } from "../utils/jwt.utils.js";

const authController = {
    login: async(req, res) => {
        const data = req.body;

        // Validation
        if(!data || !data.username || !data.password){
            res.status(422)
                .json({errorMessage: 'Invalid data'});
            
            return;
        }

        // Login via le service
        const member = memberService.login(data.username, data.password);

        if(!member){
            res.status(401)
              .json({errorMessage: 'Invalid credentials'});
            
            return;
        }
        // Générer le JWT
        const token = await generateJwt(member);

        res.status(200)
          .json({token});
    }
}

export default authController;