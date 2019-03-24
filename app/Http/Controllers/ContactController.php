<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;


class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('contact');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

//        return $request;

        $data = $request->validate([

            'name' => 'required',
            'emailaddress' => 'required|email',
            'subject' => 'required',
            'message' => 'required',
        ]);

        $contact = new Contact;

        $contact->senderName = $data['name'];
        $contact->senderEmail = $data['emailaddress'];
        $contact->title = $data['subject'];
        $contact->body = $data['message'];

        $contact->save();




//        $data = collect([
//            'name' => $request->name,
//            'emailaddress' => $request->emailaddress,
//            'subject' => $request->subject,
//            'message' => $request->message
//        ]);
//
//
//        Mail::to($request->emailaddress)
//            ->bcc("tigo.middelkoop@gmail.com")
//            ->send(new Contact($data));

        $result = true;
        return Redirect(route('contactPage'))->with(compact('result'));

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
