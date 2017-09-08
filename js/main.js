const app  = {
    item :  {
        name: undefined,
        comment: undefined
    },
    init : function () {
        app.item.name =   $('#clave');
        app.item.comment =   $('#valor');

        app.setup ();
        app.recoverData();
    },

    setup: function () {
        $('#addBtn').click (app.addComment) ;
        $('#clearBtn').click (app.clearComments) ;
    },

    addComment: function (event) {
        localStorage[app.item.name.val()] = app.item.comment.val();
        $('#data').empty();
        app.recoverData();

    },
    
    recoverData: function(){
        for(let clave in localStorage){
            $('#data').append ( `<div class ='form-group lista'><h3> ${clave} </h3>\
                            <p>  ${localStorage[clave]} </p></div>`);
        }
    },

    clearComments: function (event) {
        localStorage.clear();
        $('#data').empty();
    }
};
$(document).ready ( app.init );