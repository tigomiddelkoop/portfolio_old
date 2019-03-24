<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFrontPageLinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('front_page_lines', function (Blueprint $table) {
            $table->increments('id');
            $table->string('line');
            $table->timestamps();

        });
        DB::table("front_page_lines")->insert(
            array(
                array(
                    'line' => 'A'
                ),
                array(
                    'line' => 'A Driven'
                ),
                array(
                    'line' => 'A Creative'
                ),
                array(
                    'line' => 'A Junior'
                ),
                array(
                    'line' => 'A Happy'
                )));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('front_page_lines');
    }
}
