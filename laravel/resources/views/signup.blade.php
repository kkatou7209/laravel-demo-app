@extends('_layout')

@section('content')
<div class="contain-content flex justify-center py-3">
    <div class="min-w-96 shadow-shadow shadow-md rounded-md py-6 px-10 mt-8 bg-surface">
        <h2 class="text-xl">登録情報を入力</h2>
        <div class="border-t-primary border-[0.5px] my-4"></div>
        <form action="post">
            <label class="block mb-2 mt-10" for="email">メールアドレス</label>
            <input class="block w-full mb-1 border-black border-[0.3px] rounded-md p-2" type="email" name="email" id="email">
            <p class="block h-10 text-xs"></p>
            <label class="block mb-2" for="password">パスワード</label>
            <input class="block w-full border-black border-[0.3px] rounded-md p-2" type="password" name="password" id="password">
            <p class="block h-10 text-xs"></p>
            <div class="flex justify-end">
                <x-btn class="bg-primary">登録</x-btn>
            </div>
        </form>
    </div>
</div>
@endsection

