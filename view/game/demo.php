<div id="34">
    <select name="type" id="selectType-34" class="selectType">
        <option value="day">Journée</option>
        <option value="afternoon">Demi-journée</option>
    </select>
    
    <input type="text" id="inputBirthday-34"/>

    <input type="hidden" value="" name="priceTicket-34"/>

    <div id="price-34"></div>

</div>

<script type="text/javascript">

    var PRICE_DAY = 16;
    var PRICE_PM  = 8;

/*
    var PRICE_DAY = parseInt(PRICE_DAY_str);
    var PRICE_PM  = parseInt(PRICE_PM_str);
*/

    // une fois le select choisi
    $('.selectType').change(function() {

        let id = $(this).parent().attr('id');

        // récupérer le type
        let myType = $(this).val();
        
        // récupérer la date
        let birthField = $(this).next();
        let birth      = birthField.val();


        // calculer le prix
        if( myType == 'day') {
            let price = PRICE_DAY;
        } else {
            let price = PRICE_PM;
        }

        // afficher le résultat
        $('#price-'+id).html(price);

        // mettre dans le input
        birthField.next().val(price);
        //$('#priceTicket-'.id).val(price);

    })




</script>



