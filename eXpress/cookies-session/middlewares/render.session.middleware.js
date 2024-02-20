// Fonstion qui va renvoyer le middleware
function renderSessionMiddleware(){
    return (req, res, next) => {
        //  si on veut utiliser res.render au lieu de res.renderWithSession
        res.backupRender = res.render;
    
        res.render = (view, data, callback)=>{
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
    
            res.backupRender(view, dataWithSession, callback);
        }   
    
        next();
    }
}

module.exports = renderSessionMiddleware;