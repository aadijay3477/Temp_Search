const repo = require('../Model/schema');

exports.search = async (req,res)=>{
    try{
        const newobj = await repo.find(
            { displayName: req.params.displayName},
            {_id:0, __v:0}
        );
        if(newobj.length > 0){
            res.status(200).json({
                status: 'success',
                data: newobj,
            });
        }
        else{   
            res.status(404).json({ message : 'No Product Found' }); 
        }
    }
    catch(err){
        res.status(err.status).json({message: err.message});
    }
}

exports.invalid = function(req, res){
    res.status(403).json({
        'message': 'Invalid request',
    });
}