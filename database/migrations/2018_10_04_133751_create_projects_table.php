<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->String('name');
            $table->String('short_description');
            $table->text('description');
            $table->text('story_behind');
            $table->String('demo_url')->nullable();
            $table->String('language');
            $table->String('github')->nullable();
            $table->String('genericgit')->nullable();
            $table->integer('visits');
            $table->integer('development_stage');
//            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
}
