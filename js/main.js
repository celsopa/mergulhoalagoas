var path = location.pathname;

var imgPath = "./images";

if (path.indexOf("index.html") == -1 && path != "/mergulhoalagoas/"){
    imgPath = "../images";
}

function textoBatismo() {
    $("#descricao").html(`
            <h1>Batismo de Mergulho</h1>
            <p>Experimente a sensação de respirar embaixo d'água!</p>
            <div class="imagens_descricao">
                <figure>
                    <img src="${imgPath}/batismo_img1.jpg" alt="mergulhadores com tartaruga">
                    <figcaption>Mergulhadores com tartaruga verde.</figcaption>
                </figure>
                <figure>
                    <img src="${imgPath}/batismo_img2.jpg" alt="mergulhadores se beijando">
                    <figcaption>Compartilhe com quem você ama!</figcaption>
                </figure>
                <figure>
                    <img src="${imgPath}/batismo_img3.jpg" alt="mergulhadores com instrutores">
                    <figcaption>Experimente a sensação de flutuar!</figcaption>
                </figure>
            </div>
            `)
}


function textoBasico() {
    $("#descricao").html(`
            <h1>Curso Básico de Mergulho</h1>
            <p>Bem-vindo ao curso básicom de mergulho, sua porta de entrada para o mundo do mergulho.</p>
            <div class="imagens_descricao">
                <figure>
                    <img src="${imgPath}/basico_img1.jpg" alt="aluno na piscina">
                    <figcaption>Aprenda em local controlado.</figcaption>
                </figure>
                <figure>
                    <img src="${imgPath}/basico_img2.jpg" alt="alunos no mar">
                    <figcaption>Pratique em ambiente real!</figcaption>
                </figure>
                <figure>
                    <img src="${imgPath}/basico_img3.jpg" alt="mergulhadores com instrutor">
                    <figcaption>Divirta-se com segurança!</figcaption>
                </figure>
            </div>
            `)
}


function textoAvancado() {
    $("#descricao").html(`
            <h1>Curso Avançado de Mergulho</h1>
            <p>Aprimore suas habilidades como mergulhador e disfrute de novas aventuras.</p>
            <div class="imagens_descricao">
                <figure>
                    <img src="${imgPath}/adv_img1.jpg" alt="aluno com bússola">
                    <figcaption>Aperfeiçoe sua navegação subaquática.</figcaption>
                </figure>
                <figure>
                    <img src="${imgPath}/adv_img3.jpg" alt="mergulhador sentado em naufrágio">
                    <figcaption>Avance para o próximo nível!</figcaption>
                </figure>
                <figure>
                    <img src="${imgPath}/adv_img2.jpg" alt="mergulhador com lift bag">
                    <figcaption>Aprenda a localizar e recuperar objetos.</figcaption>
                </figure>
            </div>
            `)
}


function textoEspec() {
    $("#descricao").html(`
            <h1>Especializações</h1>
            <p>Dê continuidade à sua formação. Aprofunde seus conhecimentos, descubra tudo o que o mergulho pode te oferecer!</br>Confira a lista de cursos oferecidos clicando no menu superior.</p>
            <div class="imagens_descricao">
                <figure>
                    <img src="${imgPath}/espec_img1.jpg" alt="mergulhador passando por anel de ar">
                    <figcaption>Aprimore suas habilidades!</figcaption>
                </figure>
                <figure>
                    <img src="${imgPath}/espec_img2.jpg" alt="mergulhadora meditando">
                    <figcaption>Controle sua flutuabilidade!!!</figcaption>
                </figure>
                <figure>
                    <img src="${imgPath}/espec_img3.jpg" alt="mergulhadores fotografando">
                    <figcaption>Aprenda novas habilidades.</figcaption>
                </figure>
            </div>
            `)
}


function exibir(objeto) {
    $(`#${objeto}`).slideToggle();
    $(".espec-descricao")
        .not("#" + objeto)
        .hide();
}