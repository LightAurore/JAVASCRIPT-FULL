const memberController = {
    login: async (req,res)=>{
        res.render('member/login');
    },
    login_POST: async (req,res)=>{
        res.sendStatus(501);

    },
    register: async (req,res)=>{
        res.render('member/register');
    },
    register_POST: async (req,res)=>{
        //! TODO Ajouter un validator (yup)

        const data = req.body;

        if(memberService.usernameExists(data.username)){
            //! TODO Redirect to register page
            
            res.redirect('/member/register');
        }


        res.redirect('/member/login');
    }
}

module.exports = memberController;