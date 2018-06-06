<?php


/**
 * Class Tools
 *
 * use to add tools for create game
 */
class Tools extends Controller
{

    public function createMap($request)
    {
        $this->render('admin/uploadMap');
    }

    public function createTiles($request)
    {

        // default configuration
        $width_tile      = 32;
        $height_tile     = 32;
        $origin_x_y_from = ['x' => 'left', 'y' => 'bottom'];
        $folder_dest     = ROOT.'assets/image/map/';

        // map imported
        $original = $_FILES['map'];

        // informations of the original img
        $original_file = $original['tmp_name'];
        $original_img  = imagecreatefromjpeg($original_file);

        $size = getimagesize($original['tmp_name']);
        $width_original  = $size[0];
        $height_original = $size[1];

        // create the origin of the target image and adjust the step
        if($origin_x_y_from['x'] == 'left') {
            $startX = 0;
            $stepX  = $width_tile;
            $starRow = 0;
        }  else {
            $startX  = $width_original-$width_tile;
            $stepX   = -$width_tile;
            $starRow = $width_original-$width_tile;
        }

        if($origin_x_y_from['y'] == 'top') {
            $startY = 0;
            $stepY  = $height_tile;
        } else {
            $startY = $height_original-$height_tile;
            $stepY  = -$height_tile;
        }

        // count nb of columns and rows
        $nb_column = ceil($width_original/$width_tile);
        $nb_row    = ceil($height_original/$height_tile);

        // loop row by row
        for($i = 0 ; $i < $nb_row; $i++) {

            // loop by columns and create tile
            for($j = 0; $j < $nb_column; $j++) {

                $tile_name = $j.'x'.$i;
                $new_image = imagecreatetruecolor($width_tile, $height_tile);
                imagecopyresampled($new_image, $original_img, 0, 0, $startX, $startY, $width_tile, $height_tile, $width_tile, $height_tile);
                imagejpeg($new_image, $folder_dest.$tile_name.'.jpg');
                $startX = $startX + $stepX;

            }
            $startX = $starRow;
            $startY = $startY + $stepY;
        }

        exit;

        $this->redirect('homepage');
    }


}