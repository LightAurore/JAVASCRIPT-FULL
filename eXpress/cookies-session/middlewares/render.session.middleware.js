// Fonstion qui va renvoyer le middleware
function renderSessionMiddleware(){
    return (req, res, next) => {
        //  si on veut utiliser res.render au lieu de res.renderWithSession
        // const backupRender = res.render;
    
        res.renderWithSession = (view, data, callback)=>{
            let dataWithSession;
            if(data){
                dataWithSession = {
                    session: req.session,
                 ...data    
                }
            }else{
                dataWithSession = {
                    session: req.session
                }
            }
    
            res.render(view, data, callback);
        }   
    
        next();
    }
}

module.exports = renderSessionMiddleware;