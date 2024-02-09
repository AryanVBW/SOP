<?php
if(isset($_POST['submit']))
{
  $age=$_POST['txt_age'];
if($age>=18)
echo "<br> you are eligible to vote  ";
else
echo "<br> sorry you are not eligible to vote ";
}
?>
