

<html>
<head>Compare Dates </br></head>
<body>


    <script>

        function compare(){

            var date1 = new Data('01-05-2022');
            var date2 = new Data('25-04-2022');


            if(date1<date2){

                document.write("True,Data 1 me perpara se Data 2");
            }

            else if (date1>date2){

                document.write("False, Date 2 me permas Dates 1");
            }

            else{

                document.write("Dyjat jane te barabarta");
            }
        }

        compare();
    </script>
</body>


</html>
