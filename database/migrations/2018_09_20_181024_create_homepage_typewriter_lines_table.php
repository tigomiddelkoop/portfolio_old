<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHomepageTypewriterLinesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('homepage_typewriter_lines', function (Blueprint $table) {
            $table->increments('id');
            $table->string('line');
        });
        DB::table("homepage_typewriter_lines")->insert(
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
                    'line' => 'An Amateurish'
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
        Schema::dropIfExists('homepage_typewriter_lines');
    }
}
