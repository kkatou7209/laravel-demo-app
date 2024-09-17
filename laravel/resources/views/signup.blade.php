@extends('_layout')

@section('content')
<div class="w-full h-full px-4 flex justify-center items-center">
    <div class="h-1/2 w-1/2 rounded-xl shadow-md border-gray-300 border py-6 px-16">
        <div class="flex justify-center h-1/3">
            <legend class="m-auto text-4xl pb-10 pt-2">登録</legend>
        </div>
        <div class="h-2/3">
            <form action="/signup" method="POST" class="h-full w-full flex flex-col justify-between">
                <div class="relative mb-4">
                    <input id="email" type="email" class="block w-full rounded-md py-4 px-4 peer/email ring-1 ring-gray-400">
                    <label for="email" class="absolute top-4 left-4 peer-focus/email:top-[-10px] peer-focus/email:text-xs duration-100 bg-white text-gray-400">メールアドレス</label>
                </div>
                <div class="relative mb-4">
                    <input id="password" type="password" class="block w-full rounded-md py-4 px-4 peer/password ring-1 ring-gray-400">
                    <label for="password" class="absolute top-4 left-4 peer-focus/password:top-[-10px] peer-focus/password:text-xs duration-100 bg-white text-gray-400">パスワード</label>
                </div>
                <div class="flex justify-end">
                    <button class="rounded-md bg-primary text-white shadow-sm shadow-gray-500 py-2 px-4">登録</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

