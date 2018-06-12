<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class ApiController extends Controller
{
    protected $devId = '2609';
    protected $authKey = 'A3F3F9E7FBDC43569A76FC881E895B56';

    protected function createSignature($method)
    {
        return md5($this->devId . $method . $this->authKey . Carbon::now()->format('YmdHis'));
    }

    public function test($test)
    {

        'http://api.smitegame.com/smiteapi.svc/createsessionJson/1004/8f53249be0922c94720834771ad43f0f/20120927183145';

        $apiUrl = 'http://api.paladins.com/paladinsapi.svc';
        $method = 'createsession';

        $call = $apiUrl . '/' . $method . 'Json/' . $this->devId . '/' . $this->createSignature($method) . '/' . Carbon::now()->format('YmdHis');


        return ['test' => Carbon::now()->format('Y/m/d H:i:s'), 'token' => $call];

    }


}
